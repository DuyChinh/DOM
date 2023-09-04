var btn = document.querySelector(".btn");
var content = document.querySelector(".content");

btn.addEventListener("click", function () {
    if (content.style.display === "none") {
        btn.innerHTML = "Ẩn";
        content.style.display = "block";
    } else {
        content.style.display = "none";
        btn.innerHTML = "Hiện";
    }
});
