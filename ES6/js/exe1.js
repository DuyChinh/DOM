//Scope
/*
- Phạm vi của biến(Biến được khai báo và sử dụng ở đâu?)
1.Phạm vi toàn cục(Global Scope)

2.Phạm vi cục bộ(Local Scope)

2.1.Phạm vi hàm(function Scope)

2.2 Phạm vi khối(Block Scope)
-> Biến được khai báo trong câu lệnh có block code: if, for, while, switch,...

*/

/*
    let, const --> Chỉ hoạt động trong phạm vi scope mà nó đã khai báo
    và các scope con của nó
    --> Không được phép khai báo nhiều lần 1 biến trong 1 scope
    let --> thay đổi được
    const --> không thay đổi được và chỉ bắt buộc phải gán khi khai báo
 */

for(let i = 1; i <= 5; i++) {
    // console.log(i);
    let a = 10;
    if(i === 5) {
        a = 20;
    }
    console.log(a);//20 //let a = 20(27) --> a = 10
}

const user = {
    name:'Duy Chinh',
    email: "duychinh2102@gmail.com",
};

user.name = 'Duy Chinh HP';
console.log(user);