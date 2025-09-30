// ---------------------------------------------------------------- Function -------------------------------------------------

/*




*/

// -------------------------------------------------------------- Practice ---------------------------------------------------

// function countVowels(str) {                       // Parameter 
//     let count = 0;                                // Local Varibles 
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     console.log(count);
// }

// countVowels("Abhishek Jain");                  // Argument
// countVowels("AA");
// countVowels("aaa");

let countVowels = (str) => {                        
    let count = 0;                                
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
}

countVowels("Abhishek Jain");                  
countVowels("AA");
countVowels("aaa");

console.log("\n");

let arr = [3,4,5,6,7,8];

// arr.forEach(function printVal(val) {
//     console.log(val);
// });

arr.forEach(val => {
    console.log(val);
});

console.log("\n");

let num = [3,4,5,6,7,8];
num.forEach((val) => {
    console.log(val*val);
});

console.log("\n");

let num2 = [3,4,5,6,7,8];                                                // Map method 
let ans = num2.map((val) => {
    return val*2;
});
console.log(ans);

console.log("\n");

let num3 = [3,4,5,6,7,8];                                                // filter method 
let ans2 = num3.filter((val) => {
    return val%2 === 0 ;
});
console.log(ans2);

console.log("\n");

let num4 = [3,4,5,6,7,8];                                                // Reduce  method 
let ans3 = num4.reduce((res , curr) => {
    return res + curr ;
});
console.log(ans3);

let num5 = [3,4,5,101,6,7,8];                                                // Reduce  method 
let output = num5.reduce((prev , curr) => {
    return  prev > curr ? prev : curr;
});
console.log(output);

