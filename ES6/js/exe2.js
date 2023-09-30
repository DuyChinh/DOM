//Arrow Function

//1.Không tham số

// const getMessage = () => {
//     console.log('Hello F8');
// }
// getMessage();

//2.Có tham số

// const getMessage = msg => {
//     console.log(msg);
// }

// getMessage('Hello F8');

//3.Có nhiều tham số
// const getTotal = (a, b) => {
//     return a+b;
// }

// console.log(getTotal(10, 20));

//Arrow function with return 
// const getTotal = (a, b) => a + b;
// console.log(getTotal(10, 21));

var getUser = () => ({
    name: 'Duy Chinh',
    email: 'duychinh2102@gmail.com'
})
//return Object

//5.Closure use arrow Function
var sum = (a) => (b) => a + b;
var add = sum(10);
console.log(add(20));

function sum2(a) {
    return function (b) {
        return a + b;
    };
}
var add = sum2(1);
console.log(add(4));

const users = [
    {
        id: 1,
        name: "Nguyen Van A",
    },
    {
        id: 2,
        name: "Nguyen Van B",
    },
    {
        id: 3,
        name: "Nguyen Van C",
    }
]

const html = users.map(
    (user) => 
    `<h2>${user.name}</h2>`,)
    .join("");

document.body.innerHTML = html;
/*
Note:
- Arrow function không có tác dụng thay thế function truyền thống
- Arrow function không binding được this
- Arrow function không binding được arguments
- Arrow function không nên sử dụng để làm method của Ojbect
- Arrow function ko hoisting
- Arrow function ko dùng để tạo Constructor
 */
const getMax = (...args) => {
    console.log(args);
}

getMax(10, 20, 30);