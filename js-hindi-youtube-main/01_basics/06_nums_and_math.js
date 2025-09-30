const score = 400
// console.log(score);
console.log(typeof score);                                  // Output => number

const balance = new Number(100)
// console.log(balance);
console.log(typeof balance);                                 // Output => object


// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));   

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());                // Between 0 to 1
console.log((Math.random()*10) + 1);       // Usko Left shift karne ke liye ( 0.12346 = 1.2346)
console.log(Math.floor(Math.random()*10) + 1);       // 0.01 condition ko door karne ke liye

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)