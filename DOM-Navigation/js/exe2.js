var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
var carouselInner = document.querySelector(".carousel-inner");
var carousel = document.querySelector(".carousel");
var carouselNav = document.querySelector(".carousel-nav");

//take list item
var carouselItems = carouselInner.children;

//calc width 1 item
var itemWidth = carouselInner.clientWidth; //return width 1 element

//calc sum width items
var totalWidth = itemWidth * carouselItems.length;

//Update CSS for carsouse-inner
carouselInner.style.width = `${totalWidth}px`;
var position = 0;
//Listen event when click next
nextBtn.addEventListener("click", function () {
    if (Math.abs(position) < totalWidth - itemWidth) {
        //update CSS --> carouse-inner
        position -= itemWidth;
        carouselInner.style.translate = `${position}px`;
    }
});

prevBtn.addEventListener("click", function () {
    if (position < 0) {
        // console.log(position);
        position += itemWidth;
        carouselInner.style.translate = `${position}px`;
    }
});
