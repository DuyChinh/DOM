//DOM CSS
var content = document.querySelector(".content");
console.log(content);
// Thêm giá trị cho thuộc tính style
// content.style = "color: red; font-weight: bold;"; --> not use  vì không kế thừa được các thuộc tính đã thiết lập
//Nên sử dụng style như object

// content.style.color = "red";
// content.style.fontWeight = "700"; //font-weight
// content.style.textTransform = "uppercase";

// // content.style.backgroundColor = "black";
// content.style.fontStyle = "italic";
// content.style.textDecoration = "line-through";
var image =
    "https://images.unsplash.com/photo-1676658621214-de83b3ec46f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60";
// content.style.backgroundImage = `url("${image}")`;
console.log(content.style.color);
var css = {
    backgroundColor: "grey",
    textDecoration: "line-through",
    backgroundImage: `url("${image}")`,
    boxShadow: "5px 5px 5px 5px #ccc",
};

Object.assign(content.style, css);
// Nối object css vào object content.style
