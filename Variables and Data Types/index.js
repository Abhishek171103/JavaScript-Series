// --------------------------------------------------------------------Introduction-------------------

console.log("Abhishek Jain");

// -------------------------------------------------------------------- Variable ---------------------

var age = 25;

if (true) {
    console.log(age);                                  // Code is running ( var )
}

function solve() {
    var age_2 = 50;
    console.log(age_2);                                 // Code is running ( var )
}
solve();

// function solve() {
//     var age_3 = 25;
//     console.log(age_3);                                 // Code is not running ( var )
// }
// console.log(age_3); 
// solve();

var x = 10;
var x = 20;
console.log(x);                                   // It is running but it is creating debugging in code


let a = 100;
console.log(a);

// {
//     let a = 1000;                           // It is not running ( let )
// }
// console.log(a);


// console.log(a);
// {
//     let a = 1000;                           // It is not running ( let )
// }


{
    let b = 1000;                           // It is running ( let )
    console.log(b);
}

// let x = 10;
// let x = 20;
// console.log(x);                           // It is not running ( let )

let y = 300;
y = "Abhishek";                              //  Dynamicically type language.
console.log(y);                                   

const p = 28;
console.log(p);

// p = 330;
// const p = 200;                            // It is not running 


// --------------------------------------------------------------------- DATA TYPES -------------------

let marks = 20 ;                             // Primitive data type 
marks = " Abhishek ";
marks = true;
marks = null ; 
marks = BigInt(123);
console.log(marks);
console.log(typeof(marks));

const student = {                                         // Non - Primitive data type 
    Name : " Abhishek Jain",                         // Keys : pairs
    age : 20,
    cgpa : 8.0,
    isPass : true
};

console.log(student);
console.log(typeof(student));

console.log(student["age"]);                           // key ko access karna
console.log(student.isPass);                           // key ko access karna

student.cgpa = student.cgpa + 1;
console.log(student.cgpa);

const product = {
    title : " Ball pan",
    rating : 4,
    offer : 5 ,
    price : 270
};

console.log(product);
console.log(typeof(product));

const profile = {
    username : " @AbhishekJain",
    isFollow : false,
    Followers : 123 ,
    Following : 270
};

console.log(profile);
console.log(typeof(profile));
console.log(typeof(profile["username"]));