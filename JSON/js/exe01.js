//JSON(Javascript Object Notation)
/*
- là chuỗi
- Mô tả data một cách chính xác nhất
- Tác dụng:
    + Giao tiếp data giữa các nền tảng 

Ví dụ:
     Web F8 <-> App F8
+xml
+json
- Học JSON
+ Cách chuyển giữa các kiểu dữ liệu của ngôn ngữ lập trình tương ứng --> JSON
+ Cách chuyển giữa JSON về kiểu dữ liệu tương ứng theo ngôn ngữ lập trình đang sử dụng

Trong JS có 2 hàm xử lí:
JSON.stringify() => Chuyển kiểu dữ liệu và JSON
JSON.parse() => Chuyển JSON về kiểu dữ liệu
##Các quy tắc:
+ Trong file JSON ko có comment
+ chỉ chấp nhận nháy kép, để các kiểu dữ liệu vào dấu nháy
+ mô tả Object, key đặt trong dấu nháy kép
+ từ 2 phần tử trở lên bọc vào mảng, object với 1 key
*/ 

var users = [
    {
        id:1,
        name:"Duy Chinh",
    },
    {
        id: 2,
        name: "Hoang An",
    }
];

var json = JSON.stringify(users);
console.log(json);

var person = JSON.parse(json);
console.log(person);