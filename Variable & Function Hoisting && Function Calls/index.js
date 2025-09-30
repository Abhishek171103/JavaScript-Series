
// ---------------------------------------Variable/Function Hoisting && Function Calls ---------------------------------------

/*

-----> Function Hosting -----> Function hoisting in JavaScript is a process that moves function declarations to the top of their scope before code execution. This means that functions can be used before they are declared in the code.


-----> Function call stack ----> 


*/

// function sayMyName(str) {                                                   Function Hosting
//     console.log(str);
// }

sayMyName("Abhishek Jain");                        

function sayMyName(str) {
    console.log(str);
}

// sayHello();
// let sayHello = function() {                                                 Error ( Function Hosting )
//     console.log("Hyy kaise ho aap .");
// }

// var age ;                                                                   Variable Hosting ( var )
console.log(age);
var age = 25;

// console.log(age);                                                           Variable Hosting ( let ) Error
let marks = 25 ;
console.log(marks);

confirm