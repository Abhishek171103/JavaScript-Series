// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);
console.log(typeof myArr2);


// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)                                      // Add in first intex position
// myArr.shift()                                         // Remove in first intex position

// console.log(myArr.includes(9));                   // ye btata hai ki di gai value array me hai ya nhi
// console.log(myArr.indexOf(3));                   // index position ki value return karna

// const newArr = myArr.join()                        // convert to string

// console.log(myArr);                              Output => [0, 1, 2, 3, 4, 5]               
// console.log( newArr);                            Outopt => 0, 1, 2, 3, 4, 5
// console.log(typeof newArr);                      Output => String

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)       // (Start , end?) 

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)       // (Start , end)  , Change original Array
console.log("C ", myArr);
console.log(myn2);