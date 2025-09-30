// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",       // Is value ko hum kbhi bhi (.) operator se access nahi kar skte hai.
    [mySym]: "mykey1",                // Symbol ko hum hamesha [] me likh kar symbol ki tarah use karte hai.
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])           Symbol ko access karne ke liye [] ka use karte hai na ki (.) ka.

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)                 Yeh value ko lock kar deta hai.
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());