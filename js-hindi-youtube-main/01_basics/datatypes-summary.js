//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Stack(Primitive) and Heap(Non-primitive)

let userId = "abhishekjain17@gmail.com"
let anotherUserId = userId
anotherUserId = "abhishek011a@gmail.com"

console.log(userId);
console.log(anotherUserId);                                  // Isme ek copy value di jaati hai 

let userOne = {
    email: "abhishek@gmail.com",
    upi: "user@bob"
}

let userTwo = userOne

userTwo.email = "abhishek11@gmail.com"                      // Isme value la reference diya jaata hai 

console.log(userTwo);
console.log(userOne);



