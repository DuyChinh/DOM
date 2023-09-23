var headerH1 = document.querySelector(".header h1");
var header = document.querySelector(".header");
var nav = document.querySelector("nav");
var navHeight = nav.clientHeight;
var paddingHeader = window.getComputedStyle(header).getPropertyValue('padding-bottom');
paddingHeader = parseInt(paddingHeader);

var h1Height = headerH1.clientHeight + paddingHeader;

window.addEventListener("scroll", function() {
    var y = window.scrollY;
    if(y >= h1Height) {
        nav.classList.add("fixed");
        document.body.style.paddingTop = `${navHeight+paddingHeader}px`;
    } else {
        nav.classList.remove("fixed");
        document.body.style.paddingTop = 0;
    }
});

// console.log(window.getComputedStyle(header).getPropertyValue('padding-bottom'));
//Landing page(fb)
//ScrollIntoView
var navItems = nav.children;
Array.from(navItems).forEach(function(navItem) {
    // console.log(navItem);
    navItem.addEventListener("click", function(e) {
        e.preventDefault();
        // console.log(this);
        var hash = this.getAttribute("href");
        var section = document.querySelector(hash);

        if(section) {
            var offsetTop = section.offsetTop;
            window.scroll(0, offsetTop- navHeight)
        }
    })
})
