// //Tạo shadow DOM
// var title = document.querySelector(".title");
// var root =  title.attachShadow({
//     mode: "open",
// });
// console.log([root]);
// root.innerHTML = `<p>F8 - Duy Chinh</p>`
component.create("todo-item", function() {
    var name = this.innerText;
    var shadow = this.attachShadow({
        mode:"open",
    });
    var style = document.createElement('style');
    style.textContent = `
    .todo-item {
        border: 1px solid red;
        padding: 10px 0;
    }
    `
  
    console.log(name);
    shadow.innerHTML = `<div class="todo-item">
        <input type="checkbox"/>
        <span>${name}</span>
    </div>`;
    shadow.prepend(style);
})