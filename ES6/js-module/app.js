//Nối các module khác
/*
1.Export
- Export Default
- Export Named

2.Import
- Import Default
- Import Named

File này sẽ import những tài nguyên (biến, function, class) được export
từ file
*/
import user from "./modules/home.js";
console.log(user);

// import getProduct,
// { product as Product, category } from "./modules/product.js";
// console.log(getProduct());

// import { product as Product, category } from "./modules/product.js";
// console.log(Product);
// console.log(category);

import * as products from "./modules/product.js";
console.log(products);