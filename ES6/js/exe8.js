const getUser = (id) => {
    const users = [
      {
        id: 1,
        name: "User 1",
        salary: 5000000,
      },
      {
        id: 2,
        name: "User 2",
        salary: 6000000,
      },
      {
        id: 3,
        name: "User 3",
        salary: 7000000,
      },
      {
        id: 4,
        name: "User 4",
        salary: 8000000,
      },
    ];
    //không ngoặc nhọn là return
    return new Promise((resolve) => {
        setTimeout(() => {
            const user = users.find(({id: _id}) => id === _id);
            //{id: _id} -> destructoring
            resolve(user);
        }, 1000);
    })
};

// getUser(4). then((data) => {
//     console.log(data);
// });
const lists = [1, 3, 4];
let salary = 0;

// const getSalary = () => {
   
//     for(let i = 0; i < lists.length; i++) {
//         const promise = getUser(lists[i]).then((user) => {
//             salary += user.salary;
//             return salary;
//         })
//         if(i === lists.length - 1) {
//             return promise;
//         }
//     }
// }

// getSalary().then((response) => {
//     console.log(response);
// })

//Promise.all() => Giải quyết các bài toán sử dụng nhiều promise 
//cùng lúc

//Tạo ra 1 mảng tất cả promise
const requests = lists.map((id) => 
    new Promise((resolve) => {
        resolve(getUser(id));
    }),
)

//Đưa mảng chứa promise vào Promise.all()
Promise.all(requests).then((users) => {
    const salary = users.reduce((total, user) => total + user.salary, 0);
    console.log(salary);
})

//Bonus
const promise = Promise.resolve("F8");
promise.then((data) => {
    console.log(data);
})
