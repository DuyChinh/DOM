/*
Authentication
- Xác thực
- Xác minh xem bạn là ai?
1.Session Based Authentication(1):
- Session nâng cấp của Cookie
- Cookie là đoạn văn bản lưu ở trình duyệt, {key, value}, lưu ở clients -> clients sửa đc, có time sống và
cookie không time sống, -> session được lưu trữ trên server
- (1)Server thực hiện việc check xem có hợp lệ không(có trên server ko).
--> có nhiều nhược điểm ít sử dụng, khi thoát chrome lại đăng nhập lại

2.Token Based Authentication
- Không lưu ở server
- có request user check trong database -> check ok -> khởi tạo token(JWT)(thông tin cơ bản user)
- Sau đó trả về clients(lưu ở clients)
- server chỉ tạo và giải mã
- JWT gồm 3 phần header, payload(dữ liệu của mình), signature(decode)
- https://jwt.io/

- Access Token: được sử dụng truy cập vào dữ liệu(1 day)
- Refresh Token: chiều khóa dự phòng (1 week)


Authorization
- Ủy quyền
- Cho biết bạn sẽ làm gì>
*/

import { client } from "./client.js";
client.setUrl("https://api.escuelajs.co/api/v1");


// handleLogin({
//   email: "john@mail.com",
//   password: "changeme",
// });

const root = document.querySelector("#root");


const isLogin = () => {
    //Kiểm tra trạng thái đăng nhập
    const tokens = localStorage.getItem("login_token");
    if(tokens) {
        return true;
    }
    return false;
};

const handleLogout= () => {
    localStorage.removeItem("login_token");
    render();
}

const getProfile = async () => {
    const tokens = localStorage.getItem("login_token");
    // console.log(tokens);
    if(tokens) {
        const { access_token: accessToken } = JSON.parse(tokens);
        if(!accessToken) {
            handleLogout();
            //xử lí logout
        } else {
          //set token vào header của request
          client.setToken(accessToken);
          const { response, data } = await client.get("/auth/profile");
          if(!response.ok) {
            handleLogout();
            //Xử lí logout
          } else {
            // console.log(data);
            const profileName = document.querySelector(".profile .name");
            profileName.innerText = data.name;
          }
        }
    }
    // client.setToken('');
    // const { response, data } = await client.get("/auth/profile");
}

const eventLogin = () => {
  var loginForm = document.querySelector(".login");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailEl = e.target.querySelector(".email");
      const passwordEL = e.target.querySelector(".password");
      const email = emailEl.value;
      const password = passwordEL.value;
      handleLogin({ email, password });
    });
  }
};

const eventLogout = () => {
  const logout = document.querySelector(".profile .logout");
  if (logout) {
    logout.addEventListener("click", (e) => {
      e.preventDefault();
      handleLogout();
    });
  }
};

const render = () => {
    if(isLogin()) {
        getProfile();
        root.innerHTML = `
        <div class="container py-3">
            <h2>Chào mừng ban đã quay trở lại</h2>
            <ul class="list-unstyled d-flex gap-3 profile">
                <li>Chào bạn: <span class="name">Loading...</span></li>
                <li class="logout"><a href="#">Đăng xuất</a></li>
            </ul>
        </div>
        
        `;
    } else {
        root.innerHTML = `
    <div class="container py-3">
            <div class="row justify-content-center">
                <div class="col-7">
                    <h2 class="text-center">Đăng nhập</h2>
                    <form action="" class="login">
                        <div class="mb-3">
                            <label>Email</label>
                            <input type="email" class="form-control email" placeholder="Email..." />
                        </div>
                        <div class="mb-3">
                            <label>Password</label>
                            <input type="password" class="form-control password" placeholder="Password..." />
                        </div>
                        <div class="d-grid">
                            <button class="btn btn-primary">Đăng nhập</button>
                        </div>
                    </form>
                    <div class="msg text-danger mt-2 text-center"></div>
                </div>
            </div>
        </div>
    `;
    }
    eventLogin();
    eventLogout();
}

render();
/*
Login đăng nhập:
- Lấy dữ liệu từ Form
- Send API
- Trả về Token hoặc lỗi
- Nếu thành công => Lưu vào Storage
- Render
 */

const loading = (mode = "add") => {
    const loginForm = document.querySelector(".login");
    const btn = loginForm.querySelector(".btn");
    if(loginForm) {
        if(mode === "add") {
            btn.innerHTML = `<span class="spinner-border spinner-border-sm"></span>Loading`;
            btn.disabled = true;
        } else {
            btn.innerText = "Đăng nhập";
            btn.disabled = false;
        }
    }
}


const handleLogin = async (data) => {
    const msg = document.querySelector(".msg");
    msg.innerText = ``;
    loading();//Trước loading
    const { data: tokens, response } = await client.post("/auth/login", data);
//   console.log(tokens);
    console.log(response);
    if(response.ok) {
        //Cập nhật vào Storage (local storage)
        localStorage.setItem("login_token", JSON.stringify(tokens));
        render();
    } else {
        msg.innerText = `Sai thông tin đăng nhập`;
    }
    loading("remove");//Sau loading
};




eventLogin();
eventLogout();