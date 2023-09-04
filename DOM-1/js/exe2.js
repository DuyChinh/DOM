var btn = document.querySelector(".btn");
console.log([btn]);
/*Cách 1: Gán thông qua DOM */
btn.onmousedown = function () {
    console.log("Bạn vừa ấn chuột xuống");
};

btn.onclick = function () {
    console.log("Đăng kí thành công");
};
//listener

/*
    Cách 2: thêm trực tiếp vào HTML
 */

var handleRemove = function () {
    console.log("Xoa");
};

var email = document.querySelector("input");

email.onfocus = function () {
    console.log("Focus");
};

email.onchange = function () {
    console.log("Bạn đã thay đổi");
};

//==> Even Handler
