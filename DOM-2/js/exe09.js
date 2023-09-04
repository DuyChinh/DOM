//Event object

// btn.addEventListener("click", function (e) {
//     // tham so e = event object
//     console.log(this); //this is btn
//     console.log(e);
// });

// input.addEventListener("keyup", function (e) {
//     if (e.key === "Enter") {
//         console.log(this.value);
//     }
// });
var btn = document.querySelector(".btn");
var input = document.querySelector(".name");

var isDown = false;
// btn.style.position = "relative";
var x, y;
btn.addEventListener("mousedown", function (e) {
    isDown = true;
    console.log(e);
    x = e.offsetX;
    y = e.offsetY;
});

document.addEventListener("mousemove", function (e) {
    // console.log(e);
    if (isDown) {
        var clientX = e.clientX - x - 10;
        var clientY = e.clientY - y - 10;
        // btn.style.top = clientY + "px";
        // btn.style.left = clientX + "px";
        var css = {
            position: "relative",
            top: clientY + "px",
            left: clientX + "px",
        };
        Object.assign(btn.style, css);
    }
});

document.addEventListener("mouseup", function (e) {
    isDown = false;
});
