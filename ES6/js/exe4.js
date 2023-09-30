class User {
    //Content Class: property and method
    //Constructor
    constructor(name, email) {
        //set intial value
        this.name = name;
        this.email = email;
    }
    //define method
    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    setMessage(msg) {
        this.msg = msg;
    }
}

// var user = new User("Duy Chinh", "emkobt@gmail.com");
// console.log(user.getEmail());

//Kế thừa class
class Author extends User {
    constructor(name, email) {
        super(name, email);//Thực thi constructor của class cha 
        this.msg = null;
    }
    //Toàn quyền sử dụng các property and method of parent class(User)
    getInfo() {
        return `
        - Name: ${this.getName()}
        - Email: ${this.getEmail()}
        `;
    }
}
const author = new Author("Duy Chinh", "emkobt@gmail.com");
console.log(author);
console.log(author.getInfo());

author.setMessage("Hello F8");
console.log(author.msg);
//Class Expression
const A = class {
    constructor() {
        this.name = "Duy Chinh";
    }
}

const a = new A();
console.log(a);

customElements.define("hello-world", class extends HTMLElement {
        connectedCallback() {
            this.innerText = `Hello World`;
        }
    },
);