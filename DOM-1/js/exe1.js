//1.Truy xuất thông qua id => chỉ chọn Element đầu tiên
// var title = document.getElementById("title");
// console.log(title.innerText);
// console.log(title.id);
// console.log([title]);

// Truy xuất thông qua class
// var titleList = document.getElementsByClassName("title");
// console.log(titleList);
// for (var i = 0; i < titleList.length; i++) {
//     console.log(titleList[i]);
// }

// 3.Truy xuất thông qua tên thẻ
// var titleList = document.getElementsByTagName("h2");
// console.log(titleList);
// for (var i = 0; i < titleList.length; i++) {
//     console.log(titleList[i]);
// }

// // 4.Truy xuất thông qua CSS Selector(Chỉ lấy Selector đầu tiên)
// var title = document.querySelector(".title");
// console.log(title);
// title.innerHTML = "F8 - Education";

// 5.Truy xuất thông qua CSS Selector (Lấy tất cả) --> NodeList same Array
// var titleList = document.querySelectorAll(".title");
// console.log(titleList);
// titleList.forEach(function (title) {
//     console.log(title);
// });

// var content = document.querySelector(".content .product-heading");
// console.log(content);

// var title = content.querySelector(".product-title");
// console.log(title);
//form fllow
var fullname = document.resgister.fullname;
console.log(fullname);
