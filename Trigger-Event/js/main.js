//Trigger Event --> Tự kích hoạt 1 event mà ko cần tác động của người dùng
//Xây dựng chức năng in
/*
Trong JS có 2 cách để Trigger Event:
1.Dùng hàm có sẵn: click(), submit()

-> Nhược điểm: không đầy đủ hàm với tất cả các sự kiên

2.Dùng thông qua hàm: dispatchEvent()
 */

var btn = document.querySelector(".btn");
btn.addEventListener("click", function() {
    console.log("Hello World");
});

//1 giấy click vào nút 1 lần
// setInterval(function() {
//     btn.click();
// }, 1000);
var contentEl = document.querySelector(".content");
var dowloadBtn = document.querySelector(".download-btn");
// console.log(dowloadBtn);

dowloadBtn.addEventListener("click", function() {
    var content = contentEl.innerText;
    var blob  = new Blob([content]);
    console.log(blob);
    //Tạo URL từ Blob
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "hello-f8.txt";
    a.click();
    // console.log(url);
})

var quantityEl = document.querySelector(".quantity input");
var plusBtn = quantityEl.nextElementSibling;
var minusBtn = quantityEl.previousElementSibling;
var amountEL = document.querySelector(".amount");
var price = 12000;

var changeEvent = new Event("change");

quantityEl.addEventListener("change", function() {
    if(this.value < 0) {
        this.value = 0;
    }
    amountEL.innerText = this.value*price;
})

plusBtn.addEventListener("click", function() {
    quantityEl.value++;
    quantityEl.dispatchEvent(changeEvent);
});

minusBtn.addEventListener("click", function() {
    quantityEl.value--;
    if(quantityEl.value < 1) {
        quantityEl.value = 1;
    }
    quantityEl.dispatchEvent(changeEvent);

});