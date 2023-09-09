

cnt = 0;
h1 = document.createElement("h1");
// h1.innerText = `${cnt}`;
h1.innerText = "Count: ";
var countNode = document.createTextNode(0);
h1.append(countNode);
// span = document.createElement("span");
// span.innerText = 0;
// h1.append(span);
// h1.innerText = 0;
document.body.append(h1);
btn = document.createElement("button");
btn.innerText = "+";
document.body.append(btn);
btn.addEventListener("click", function() {
    // h1.innerText++;
    countNode.data++;
});

//Text Node
var text = document.createTextNode("Hello");
document.body.append(text);
text.data = "Hello F8";

console.log([text]);


