var content = document.querySelector(".content");
// // 1.Lấy nội dung thẻ HTML
// console.log(content.innerHTML);

// console.log(content.innerText);

// console.log(content.textContent);

// console.log(content.outerHTML);

// 2.Thay đổi nội dung của  thẻ HTML
// content.innerHTML = `<h2>Javascript</h2>`;
// content.innerText = `<h2>Js</h2>`;
// content.outerHTML = `<h2>Javascript</h2>`;

result = document.querySelector(".result");
btn = document.querySelector(".btn");
action = document.querySelector(".btn .action");
count = document.querySelector(".btn .count");
var cnt = 0;
btn.addEventListener("click", function () {
    if (result.innerText === "") {
        result.innerHTML = content.innerHTML;
        content.innerText = "";
        action.innerText = "Up";
    } else {
        content.innerHTML = result.innerHTML;
        result.innerText = "";
        action.innerText = "Down";
    }
    count.innerText = ++cnt;
});
