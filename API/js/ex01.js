//API = Application Programming Interface (Giao diện lập trình ứng dụng)
/*
Giao diện: HTML-CSS-JS

Dữ liệu: Back-end
Giao tiếp giữa fontend và backend(HTTP protocol)
Back-end: Xây dựng API để các ứng dụng khác thao tác: CRUD
- C = Create
- R = Read
- U = Update
- D = Delete

Font-end: Gọi API(Fetch API)

Thường API được xây dựng theo chuẩn RESTFul

- URL: Server API + resource 
=> https://api.fullstack.edu.vn/users

- HTTP Method:
+ GET -> Lấy dữ liệu
+ POST -> Thêm mới
+ PUT -> Sửa(ghi đè)
+ PATCH -> Sửa(không ghi đè)
+ DELETE -> Xóa


- Endpoint: Sự kết hợp của Method + Resourse
+ GET/users
+ POST/users
+ GET/ users/ {id}

- HTTP Response Code
+ Success: 200
+ Created: 201
+ Not Found: 404

- HTTP Response Message: JSON

Lấy API ở đâu
- Tự viết (Có kiến thức Back-end và Database)
- Sử dụng các dịch vụ Mockup API
- Sử dụng các thư viện Mockup API

----> Học JSON Server
- Cai node
- tạo thư mục server (chuột phải open git bash here)
gõ: json-server --watch db.json
 */


/*
Làm sao để Front-end gọi được API từ Back-end?
- XMLHttpRequest -> cũ, không trả về promise
- fetch -> mới, trả về promise
- Thư viện: axios, jquery ajax, ...

Cơ chế:
+ Client Side Rendering (CSR) -> return JSON
+ Server Side Rendering (SSR) -> return all HTML
*/

const serverApi = `http://localhost:3000` ;

// fetch(`${serverApi}/users`).then((response) => {
//     console.log(response);
//     //response.json() -> Trả về dữ liệu và tự động parse JSON thành Object
//     //,array
//     //response.text() -> Trả về bản gốc của API
//     return response.json();
// }).then((users) => {
//     console.log(users);
//     document.body.innerHTML = users.map(
//       ({ name, email }) => `
//             <div>
//                 <h2>${name}</h2>
//                 <h2>${email}</h2>
//                 <hr/>
//             </div>
//         `,
//     )
//     .join("");
// })

// const getUser = async () => {
//     const response = await fetch(`${serverApi}/users`);
//     const users = await response.json();
//     console.log(users);
// }

// getUser();

// const getUser= async (id) => {
//     const response = await fetch(`${serverApi}/users/${id}`);
//     const user = await response.json();
//     console.log(user);
// }

// getUser(1);


//create new
// const postUser = async (data) => {
//     //data = object = Dữ liệu gửi lên server
//     const response = await fetch(`${serverApi}/users`, {
//         method: 'POST',
//         //thông tin bên ngoài phong bì khi gửi thư
//         //header thông tin đi kèm của resquest, response
//         headers: {
//             "Content-Type": "application/json",
//         },
//         //thông tin bên trong phong bì
//         body: JSON.stringify(data),
//     })
//     console.log(response);
// }

// postUser({
//     //key của back-end
//     //id tự động tăng lên ko thêm
//     name: "User 4",
//     email: "user4@gmail.com",
// });

// /*Update */

// const updateUser = async (data, id) => {
//     const response = await fetch(`${serverApi}/users/${id}`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     });
//     console.log(response);
// };

// updateUser(
//     {
//         name: "User 11",
//     },
//     1,
// );

const deleteUser = async (id) => {
    const response = await fetch(`${serverApi}/users/${id}`,
    {
        method: "DELETE",
    });
    console.log(response);
}

deleteUser(1);


