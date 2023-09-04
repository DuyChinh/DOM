var btn = document.querySelector(".btn");
// Event listener

btn.addEventListener("click", function () {
    console.log("register course");
});

var handleClick = function () {
    console.log("register course 2");
};

btn.addEventListener("click", handleClick);

/*
Event trong DOM luôn tồn tại một tham số ở listener ==> Gọi là Event Object
 */

complete = document.querySelector(".complete");
complete.addEventListener("click", function () {
    btn.removeEventListener("click", handleClick);
});

var items = document.querySelectorAll("ul li");
console.log(items);
items.forEach(function (item) {
    item.addEventListener("click", function () {
        // console.log(item);
        console.log(this);
    });
});
