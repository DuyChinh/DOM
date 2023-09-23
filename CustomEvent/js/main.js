var slider = document.querySelector(".slider");
var msg = document.querySelector(".msg");

//1.change --> Khi thay đổi
// slider.addEventListener("change", function() {
//     console.log(this.value);
// })
// //Tạo ra event: finish
// var finishEvent = new Event("finish");
// var over = new Event("over");

// //2.input -> Bấm chuột xuống, kéo
// slider.addEventListener("input", function() {
//     // console.log(this.value);
//     if(+this.value < 100) {
//         slider.dispatchEvent(over);
//     } else if(+this.value === 100) {
//         slider.dispatchEvent(finishEvent);
//         //Phản hồi sự kiênh
//         // msg.innerText = `Hello F8`;
//     } else {
//         // msg.innerText ="";
//     }
// });


// slider.addEventListener("finish", function() {
//     msg.innerText = `Hello F*`;
// });


// slider.addEventListener("over", function(e) {
//     console.log(e);
//     // console.log(this.data);
// });

// document.querySelector(".slider-2").addEventListener("over", function() {
//     console.log(this.data);
// })


