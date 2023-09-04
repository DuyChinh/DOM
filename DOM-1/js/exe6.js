var btn = document.querySelector(".btn");
var modalBox = document.querySelector(".modal-box");

btn.addEventListener("click", function () {
    modalBox.classList.add("show");
});

var closeBtn = modalBox.querySelector(".modal-box .close");
var modalOverlay = modalBox.querySelector(".overlay");

var closeModal = function () {
    modalBox.classList.remove("show");
};

modalOverlay.addEventListener("click", closeModal);
