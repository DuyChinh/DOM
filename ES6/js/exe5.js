//Static Method, Property
//-> không bị phụ thuộc bởi đối tượng, 
//không bị thay đổi khi khởi tạo lại đối tượng
//khi khai báo không được dùng this;

//Array.isArray() -> Phương thức tĩnh
//Math.Pi -> Thuộc tính tĩnh
class User {
    constructor() {
        //non-static method
        this.name = "Duy Chinh";
        this.email = "duychinh@gmail.com";
    }
    //non-static method
    getName() {
        //Truy cập vào static
        console.log(this.constructor.getEmail());
        return "F8";
    }
    //static property
    static message = "Hello 500 ae"

    //static method
    static getEmail() {
        // const obj = new this();
        // //this is class User
        // console.log(obj.getName());
        return "duychinh2102@gmail.com";
    }
}
const user = new User();
console.log(user.getName());
// console.log(User.message);
// console.log(User.getEmail());


class Person {
    constructor() {
        this.name = "Duy Chinh";
        this.email = "doanchinhit21@gmail.com";
    }

    get getName() {
        return this.name;
    }

    set setEmail(value) {
        this.email = value;
    }
}

const person = new Person();

console.log(person.getName);//string.length the same
person.setEmail = "emkobt@gmail.com";
console.log(person);