/*Trong event object thường sử dụng 2 phương thức dưới */
//preventDefault
/*-> Chặn hành động mặc định html */
var link = document.querySelector(".link");

link.addEventListener("click", function (e) {
    e.preventDefault();
});

var loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", function (e) {
    //submit của form, không phải của button
    e.preventDefault();
    console.log("submit");
});
//CSS user-select: none -> chan boi den
menu = document.querySelector(".menu");
document.addEventListener("contextmenu", function (e) {
    console.log("ok chua");
    e.preventDefault();
    menu.style.display = "block";
    menu.style.left = e.clientX + "px";
    menu.style.top = e.clientY + "px";
    //chan chuot phai
});

//stopPropagation() -> tình trạng nổi bọt (viết vào thẻ con)
//nổi phần tử con lên trên phần tử cha(ví dụ các class trên document)
