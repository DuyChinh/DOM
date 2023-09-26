//HTML Element
HTMLElement.prototype.css = function(style={}) {
    Object.assign(this.style, style);
}

var title = document.querySelector(".title");
// console.log([title]);\
title.css({
    color: "red",
    fontSize: "2rem",
    fontStyle: "italic",
});

//Custom element
//--> Tạo ra một thẻ HTML mới, có hoạt động giống các thẻ html có sẵn nhưng khác chức năng,
// nghiệp vụ
//Reflect 
// function HelloWorld() {
//     return Reflect.construct(HTMLElement, [], HelloWorld)
// }

// HelloWorld.prototype = Object.create(HTMLElement.prototype);

// // console.log(HelloWorld);
// // console.log(HelloWorld.prototype);
// //Vòng đời --> lifecycle Callback
// HelloWorld.prototype.construct = HelloWorld;

// HelloWorld.prototype.connectedCallback = function() {
//     this.innerText = `CONTENT`;
// };


// HelloWorld.prototype.attributeChangedCallback = function() {
//     console.log("Khi thuộc tính thay đổi");
// }

// HelloWorld.prototype.disconnectedCallback = function() {
//     console.log("Element bị xóa");
// }

// customElements.define("hello-world", HelloWorld);

component.create("hello-world", function() {
    this.innerText = `Hello F8`;
});

component.create('f8-image', function() {
    var link = this.getAttribute('link');
    // console.log(link);
    var width = this.getAttribute('width');
    var height = this.getAttribute('height');
    var style = document.createElement('style');
    style.textContent = `
    .box-image {
        border: 1px solid red;
        display: inline-block;
        border-radius: 10px;
    }

    .box-image img {
        display: block;
    }
    .box-image p {
        margin: 0;
        font-style: italic;
    }
    `
    var caption = this.innerText;

    this.innerHTML = `
    <div class="box-image">
        <img src="${link}" width=${width?? ""} height="${height?? ""}"/>
        ${caption.length ? `<p>${caption}</p>`: ""}
    </div>
    `;
    this.prepend(style);
})


