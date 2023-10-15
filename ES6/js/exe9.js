/*
Try catch => Xử lí các lỗi ngoài lệ
Block try: chứa đoạn code muốn bắt lỗi

Block catch: chứa thông tin lỗi

Try có lỗi => Catch sẽ hoạt động

Block finally: chạy cuối cùng 
 */
// console.log('Hello F8');
// try {
//     // getA();
//     throw new Error("xuống catch để tập trung xử lí 1 lỗi");
// } catch(exception) {
//     console.log(exception.message);
// } finally {
    
// }

// console.log('Duy Chinh');

//Async Await
/*
Async Function luôn trả về 1 promise
 */
// const getUser = async() => {
//     return "Duy Chinh";
// }

// getUser().then((response) => {
//     console.log(response);
// })

const getInfo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("Duy Chinh");
            reject("Lỗi mạng");
        }, 1000);
    });
};

// const showInfo = async () => {
//     try {
//         const user = await getInfo();
//         console.log(user);
//     } catch(e) {
//         console.log(e);
//     }
// }

// showInfo();

/*IIFE -> Định nghĩa 1 function xong gọi luôn */
(async() => {
    try {
        const user = await getInfo();
        console.log(user);
    } catch(e) {
        console.log(e);
    } finally {
        console.log("finally của promise");
    }
})();
