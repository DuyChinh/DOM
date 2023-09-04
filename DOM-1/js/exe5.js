var link = document.querySelector(".link");

console.log(link);
// Lấy giá trị thuộc tính(Chỉ áp dụng với thuộc tính thật(thuộc tính có trong thẻ đó) của thẻ html)
// thẻ a ko có thuộc tính width -> undefine
// console.log(link.id);
// console.log(link.href);
// console.log(link.target);
// console.log(link.className);

// Cập nhật giá trị thuộc tính
// link.href = "https://chinh.io.vn";
// link.title = "Web DC";

//Truy cập vào Data Attribute
// console.log(link.getAttribute("data-count"));
// console.log(link.dataset);
// console.log(link.dataset.count);
// console.log(link.dataset.indexNumber);

// Cập nhật giá trị vào Data Attribute
// link.setAttribute("data-count", 10);
// link.setAttribute("data-index-number", "ahihi");
// link.setAttribute("data-animation-duration", "3s");

// // Cập nhật Data Attribute bằng dataset
// link.dataset.count = 10;
// link.dataset.indexNumber = "ahihi";
// link.dataset.animationDuration = "2s";

var content = document.querySelector(".content");
var btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
    console.log(content.classList);
    // content.classList.add("hello", "hello-2", "hello-3");
    // content.classList.remove("content-3");
    content.classList.toggle("hello");
    if (content.classList.contains("content-3")) {
        console.log("Exist");
    }
    content.remove();
    //Xóa element
});
