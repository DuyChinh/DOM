var checkAll = document.querySelector("#checkAll");
var checkItems = document.querySelectorAll(".check-item");
// console.log(groupInput.children);
// var arr = Array.from(groupInput.children);


// checkAll.addEventListener("change", function() {
//     arr.forEach(function(item, index) {
//        item.children[0].checked = true;
//     });
// });

// var cnt = 0;
// arr.forEach(function(item, index) {
//     item.children[0].addEventListener("change", function() {
//         cnt++;
//     });
//     console.log(cnt);
//  });


//  if(cnt == arr.length) {
//     checkAll.checked = true;
//  }

console.log([checkAll]);

checkAll.addEventListener("change", function() {
    var checkStatus = this.checked;
    checkItems.forEach(function(checkItem) {
        checkItem.checked = checkStatus;
    });
});

checkItems.forEach(function(checkItem) {
    checkItem.addEventListener("change", function() {
        var status = Array.from(checkItems).every(function(checkbox) {
            return checkbox.checked === true;
        });
        checkAll.checked = status;
    })
});












