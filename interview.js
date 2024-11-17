// 01 -> what will be the output of below code

var x = 1;
let y = 2;
{
  var x = 1;
  let y = 2;
}

console.log(x, y); // output  = 1,2

// 02 -> what will be the output of below code

let str = "dtech";
str[0] = "c";
console.log(str); // output = dtech
str = "ctech";
console.log(str); // output = ctech

// 03 -> what will be the output of below code
const x = [];
x[4] = "hi";
x.forEach((ele) => {
  console.log(ele); // output = hi one time
});

// 04 -> what will be the output of below code

let timer = setTimeout(() => {
  console.log("Hello Timer"); // noting
}, 10);

clearTimeout(timer);

// 05 -> what will be the output of below code
let x = 1;
let y = 2;

console.log(x++ + ++y); //output 4

// 06 -> what will be the output of below code
const name = "Hello";
age = 31;

console.log(delete name); //output false
console.log(delete age); //output ture

// 07 -> what will be the output of below code
y = 10;
var x = 1 + y;
console.log(x); // 11

// 08 -> what will be the output of below code
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 146;
a[c] = 86;
console.log(a[b]); // output 86

console.log(a);
console.log(b);
console.log(c);

// 09 -> what will be the output of below code
let x = 10 > 9 > 8;
console.log(x === true); // output false

// 10 -> swap 2 varible without using extra variable
let a = 10;
let b = 20;

a = a - b;
b = a + b;
a = b - a;

console.log(a, b);

a = a ^ b;
b = b ^ a;
a = a ^ b;
console.log(a, b);

// //11 ->  what will be the output of below code

let x = [1];
let y = [2];

console.log(x + y); // output is : '12'
