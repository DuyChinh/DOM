//Promise
// const getA = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("get A");
//         }, 1000);
//     });
// }

// const getB = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("get B");
//         }, 1500);
//     });
// }

// const getC = () => {
//     return new Promise((resolve) => {
//          setTimeout(() => {
//             resolve("get C");
//         }, 500);
//     });
// }

// getA()
//     .then((response) => {
//         console.log(response);
//         getB()
//         .then((response) => {
//             console.log(response);
//             getC()
//             .then((response) => {
//                 console.log(response);
//             });
//         });
//     });
//Chaining: a().b().c().d()

// getA()
//     .then((response) => {
//         console.log(response);
//         return getB();
//     })
//     .then((response) => {
//         console.log(response);
//         return getC();
//     })
//     .then((response) => {
//         console.log(response);
//     })

const getRequest = () => {
  return new Promise((resolve) => {
    const data = { name: "F8", teacher: "Hoàng An" };
    const response = {
      text: () => new Promise((resolve) => {
            resolve(JSON.stringify(data));
      }),
      json: () => new Promise((resolve) => {
            resolve(data);
      }),
    };
    setTimeout(() => {
      resolve(response);
    }, 1000);
  });
};

getRequest()
  .then((response) => {
    //Lựa chọn kiểu dữ liệu trả về
    return response.text();
    // console.log(response);
    // return response.json();
  })
  .then((data) => {
    console.log(data);
  });
