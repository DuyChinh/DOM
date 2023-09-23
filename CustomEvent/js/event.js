//Định nghĩa các Event cho element
var inputRangeList = document.querySelectorAll('input[type="range"]');
// console.log(inputRange);
// var overEvent = new Event("over");
var overEvent = new CustomEvent("over", {
    detail: "F8",
});


if(inputRangeList.length) {
    inputRangeList.forEach(function(input) {
        input.addEventListener('mouseover', function(e) {
            var offsetX = e.offsetX;
            var value = offsetX * 100 / input.clientWidth;
            value = value.toFixed(2);
            this.data = value;
            overEvent.skipX = offsetX;
            overEvent.cleint = e.clientX;
            // console.log(value);
            input.dispatchEvent(overEvent);
        });
    });
}


