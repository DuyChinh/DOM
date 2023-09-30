//Destructuring: Áp dụng với mảng và Object
//-> Phá vỡ cấu trúc để có thể truy cập vào các phần tử trong array, object
// và gán thành các biến riêng biệt
// const user = {
//     name: "Duy Chinh",
//     email: 'doanduychinh2102@gmail.com',
//     age: 32,
//     address: 'Ha Noi',
//     salary: 5000000,
// };

// const {name: _name, email, age = 31} = user;

// console.log(_name, email, age);
// const key = 'age';

// const {name:_name, email,[key]: a, ...rest} = user;
// console.log(_name, email, a);
// console.log(rest);

// let {age, salary} = user;
// age = 35;
// console.log(age);

// const user = ["Duy Chinh", "duychinh2102@gmail.com", 31, "HP", {
//     a:1, b:2, c: 3
// }];
// // //đúng thứ tự
// // const [username, email, , address] = user;
// // //, , bỏ qua
// // console.log(username, email, address);

// const [username, email, age, address, {a, b, c}] = user;
// console.log(username, email);
// console.log(a, b, c);

// var getUser = () => {
//     const handle = () => {
//         return "F8";
//     }
//     return [10, handle];
// }
// const [user, setUser] = getUser();
// console.log(user);
// console.log(setUser());
// let a = 10;
// let b = 20;
// [a, b] = [b, a];
// console.log(a, b);

// const getOption = ({name, email, age}) => {
//     console.log(name, email, age);
// }
// getOption({
//     name: 'Duy Chinh',
//     email: 'duychinh2102@gmail.com',
//     age: 20,
// })

//Spread Operator -> Trải các phần tử trong object array ra ngoài

// const oldObj = {
//     name: "Duy Chinh",
//     email: 'duychinh2102@gmail.com',
// };

// const newObj = {salary: 5000000, ...oldObj};
// console.log(newObj);
const oldArr = [
    'Duy Chinh',
    'duychinh2102@gmail.com'
]
const newArr = [31, ...oldArr];
console.log(newArr);

var getTotal = (a, b, c) => {
    return a + b + c;
}
const values = [5, 10, 1];
const result = getTotal(...values);
console.log(result);

