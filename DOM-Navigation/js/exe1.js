/*
Chọn được element dựa vào 1 element khác
1. Lên cha
    + parentElement => Trả về Element Node
2. Xuống con
    + children => Lấy danh sách các element con trực tiếp
3. Kế tiếp
    + nextElementSibling => lấy thành phần kế tiếp (Ngang hàng)
4. Lùi lại
    + previousElementSibling => Lấy thành phần trước 
 */

var productActive = document.querySelector(".products .active");
// console.log(productActive);

// console.log(
//     productActive.nextElementSibling.nextElementSibling.previousElementSibling
// );
var products = document.querySelector(".products");
var firstElement = productActive;
var lastElement = products.lastElementChild;
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", function () {
    var nextElement = productActive.nextElementSibling;
    if (nextElement === null) {
        // lastElement = nextElement.previousElementSibling;
        nextElement = firstElement;
    }
    nextElement.classList.add("active");
    productActive.classList.remove("active");
    productActive = nextElement;
});

prevBtn.addEventListener("click", function () {
    var prevElement = productActive.previousElementSibling;
    if (prevElement === null) {
        prevElement = lastElement;
    }
    prevElement.classList.add("active");
    productActive.classList.remove("active");
    productActive = prevElement;
});
