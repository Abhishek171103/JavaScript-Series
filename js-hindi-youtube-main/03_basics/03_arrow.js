const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);   // This keyword current context ko refer karta hai.
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);         // This keyword function me use nahi kar raha hai.
//                                            Yeh sirf object me use ho raha tha.
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);        // Isme bhi use nahi ho raha hai.
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);                    // Isme bhi use nahi ho raha hai.
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2                // Its called Implicit Return

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()