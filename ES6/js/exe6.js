// const getA = () => {
//     console.log("GetA");
// }

// const getB = () => {
//     setTimeout(() => {
//         console.log("GetB");
//     }, 1000);
//     // console.log("GetB");
// }

// const getC = () => {
//     console.log("GetC");
// }

// getA();
// getB();
// getC();

/*
3 cách xử lí bất đồng bộ
- Callback(ES5)
- Promise(ES6)
- Async Await Function (ES7)
*/

//Promise
/*
    Object để xử lí các tác vụ bất đồng bộ
    Promise state:
    - pending -> Chờ xử lí(không gọi then or catch)
    - fulfilled -> xử lý thành công
    - reject -> Xử lí thất bại
*/

const promise = new Promise((resolve, reject) => {});
console.log(promise);

const downloadImage = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {
                url: "https://chinh.io.vn",
                size: 30,
            }
            //Chỉ tồn tại resolve() or reject()
            //Nếu resolve() được gọi trước -> không chạy reject và ngc lại
            resolve(data);
            // reject("Error internet");
        }, 2000)
    })
    return promise;
};

downloadImage()
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Completed");
    })