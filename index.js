import DB from "./singleton.js";

// singleton
let a = new DB(1, 2, 3);
let b = new DB(2, 3, 4);

console.log(a);
console.log(b);
