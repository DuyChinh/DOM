// var input = document.querySelector("input");
// console.log(input.defaultValue);

var handleBeforeUnload = function(e) {
    e.returnValue = "Hi";
};

// input.addEventListener("keyup", function() {
//     if(this.value !== this.defaultValue) {
//         window.addEventListener("beforeunload", handleBeforeUnload);
//     } else {
//         window.removeEventListener("beforeunload", handleBeforeUnload)
//     }
// })

var ListInput = document.querySelectorAll("input");

// var handleBeforeUnload = functione(e) {
//     e.returnValue = "Hi";
// };
var btn = document.querySelector("button");


// ListInput.forEach(function(input) {
//     input.addEventListener("input", function() {
//         if(this.value !== this.defaultValue) {
//             window.addEventListener("beforeunload", handleBeforeUnload);
//         } else {
//             window.removeEventListener("beforeunload", handleBeforeUnload);
//         }
//     })
// })
var loginForm = document.querySelector(".login");

loginForm.addEventListener("input", function(e) {
    if(e.target.type === "checkbox" || e.target.type ==="radio") {
        if(e.target.defaultChecked !== e.target.checked) {
            window.addEventListener("beforeunload", handleBeforeUnload);
        } else {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        }
    } else {
        if(e.target.value !== e.target.defaultValue) {
            window.addEventListener("beforeunload", handleBeforeUnload);
        } else {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        }
    }
})

loginForm.addEventListener("submit", function() {
    e.preventDefault();
    window.addEventListener("beforeunload", handleBeforeUnload);
    this.submit();
})


