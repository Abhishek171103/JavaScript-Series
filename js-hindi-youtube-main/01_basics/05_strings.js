const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));                   // Returns the character at the specified index.
console.log(gameName.indexOf('t'));         // Returns the position of the first occurrence of a substring.

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());               // Ye starting and ending white space remove kar deta hai.

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))           /* Replaces text in a string, using a regular expression or 
                                                search string. */

console.log(url.includes('sundar'))     // Yeh string se match karke btata hai ki ye hai ya nahi string me.

console.log(gameName.split('-'));