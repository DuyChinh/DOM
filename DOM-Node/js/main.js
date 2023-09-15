/*Problem */

// var btn = document.querySelector(".btn");

// var content = document.querySelector(".content");
// var h1 = content.querySelector("h1");

// h1.addEventListener('click', function() {
//     this.style.color = "red";
// });

// btn.addEventListener("click", function(){
//     content.innerHTML += '<p>Fullstack Course</p>';
//  --> reset data
//     h1 = content.querySelector("h1");
//     h1.addEventListener('click', function() {
//         this.style.color = "red";
//     })
// });

//create new element
var content = document.querySelector(".content");
var h2 = document.createElement("h2");
//h2: element note
h2.innerText = "Fullstack Course";
h2.classList.add("course-name");
console.log(h2);

//ADD h2 vào Content (Thêm vào cuối)
// content.appendChild(h2);
content.append(h2);

var ul = document.createElement("ul");


for(var i = 1; i <= 3; i++) {
    var li = document.createElement("li");
    li.innerText = `Item ${i}`;
    ul.prepend(li);
}
content.append(ul);

//add 1 node vào trước một node khác

var p = document.createElement("p");
p.innerText = `Hello F8`;

content.insertBefore(p, h2);

//Thay thế 1 node bằng 1 node khác
var h3 = document.createElement("h3");
h3.innerText = "Hello Hoang An F8";
content.replaceChild(h3, p);

//Xóa 1 node con
content.removeChild(h2);








