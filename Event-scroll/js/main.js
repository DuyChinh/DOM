//Event Scroll --> change scroll trinh duyet
// window.addEventListener("scroll", function() {
//     console.log("Hello F8");
// });

//1.Lấy tọa độ x, y khi scroll
// var preY = 0;
// window.addEventListener("scroll", function() {
//     var x = window.scrollX;
//     var y = window.scrollY;
    
//     // console.log(`x = ${x}`, `y = ${y}`);
//     if(y > preY) {
//         document.body.style.background = "red";
//     } else {
//         document.body.style.background = "initial";
//     }
//     preY = y;
// });

/*2. Thay đổi scroll */
//window.scroll(x, y)
// window.scroll(0, 200);//default scroll --> tính năng chat 
//scroll-behavior: smooth
//Xây dựng tính năng back to top
var topBtn = document.querySelector(".top");
window.addEventListener("scroll", function() {
    var y = window.scrollY;
    if(y > 50) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
});

topBtn.addEventListener("click", function() {
    window.scroll(0, 0);
})

