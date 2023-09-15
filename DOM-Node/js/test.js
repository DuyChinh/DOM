var content = document.querySelector(".content");
var h2 = document.createElement("h2");
h2.innerText = "Test Course";

content.append(h2);
// content.prepend(h2);

var h3 = document.createElement("h3");
h3.innerText = "Hi Hi Hi";

// content.append(h3);
content.replaceChild(h3, h2);