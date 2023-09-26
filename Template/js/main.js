var root = document.querySelector("#root");

var users = [
    {
        id: 1,
        name:"Nguyen Van A"
    },
    {
        id: 2,
        name:"Nguyen Van B"
    },
    {
        id: 3,
        name:"Nguyen Van C"
    },
];

var render = function() {

    var html = `
        <h1 v-if="1">Danh sách khách hàng</h1>
        ${
            users.map(function(user) {
                return `<h2>${user.name} <button>Xóa</button></h2>`;
            }).join("")
        }
    ` 
    // root.innerHTML = html;
    var templateEL = document.createElement("template");
    templateEL.innerHTML = html;
    // console.log(templateEL);
    // console.log(templateEL.content);
    //fragment --> Thẻ bọc
    var templateNode = templateEL.content.cloneNode(true);
    // chỉ sử dụng được 1 lần templateEL.content
    // console.log(templateEL.content);
    if(templateNode.children.length) {
        Array.from(templateNode.children).forEach(function(element) {
            handleAttribute(element);
        })
    }
    root.append(templateNode);
}

var handleAttribute = function(element) {
    var vifAttr = element.getAttribute("v-if");
    if(vifAttr) {
        if(+vifAttr !== 1) {
            element.remove();
        }
    }
}

render();

