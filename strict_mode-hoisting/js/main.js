//Strict Mode
/*
Chế độ nghiêm ngặt trong JS
-> Giảm thiểu lỗi ngầm dành cho lập trình
-> Giúp ứng dụng hoạt động tốt trên trình duyệt khác nhau
 */
// "use strict";
// a = 10
// console.log(a); --> error

// var getTotal = function() {
//     // "use strict";
//     a = 10;
//     console.log(a);
// }
// getTotal();

/*
Hoisting 
- Cơ chế mặc định của JS
- Đẩy phần khai báo biến, hàm(function declaration) lên trước phần thực thi
- Với biến chỉ đẩy phần khai báo, không đẩy giá trị
*/
// "use strict"
// a = 10;
// console.log(a);
// var a; //--> đẩy lên dòng 25
// //function declaration
// getMessage();
// function getMessage() {
//     console.log("hello F8");
// }
