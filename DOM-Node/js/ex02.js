document.addEventListener("DOMContentLoaded", function() {
    var title = document.querySelector(".title");
    console.log(title);
});

//Không bị ảnh hưởng bởi việc đặt thẻ script, sự kiện này sẽ kiểm tra xem 
//cây DOM được hình thành chưa --> thì mới có thể trọc vào dữ liệu

//Event load
window.addEventListener("load", function() {
    console.log("Tải xong");
    var toggle = document.querySelector(".toggle");
    toggle.remove();
    var load = document.querySelector(".load");
    load.remove();
});
//Mọi thứ tải xong hết mới thực hiện.
//thường sử dụng làm chức năng loading