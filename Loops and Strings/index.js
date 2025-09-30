// ------------------------------------------ Loops -----------------------------------------------------

/*

( 1 ) For Loop 

( 2 ) While Loop 

( 3 ) Do-while Loop

( 4 ) For-of Loop

( 5 ) For-in Loop 

*/

// ----------------------------------------------- Strings ----------------------------------------------

/*

let Name = " Abhishek Jain ";                                      //  Create a String 
let Name2 = ' Abhishek Jain ' ;

let Name3 = ` Abhishek Jain
is a 
Good person. ` ;

let Name = new String(" Abhishek Jain ");


let op1 = "Abhishek ";  
let op2 = "Jain ";
let ans2 = op1.concat(op2);
let ans = op1 + op2 ;                                                // Concatenating String 

let ans = `${op1}${op2}` ;                                     Concatenating using String interpolation using template literals ${}

console.log(op2.length) ;                                           String Length

console.log(op2.toUpperCase());                                      UpperCase Method 
console.log(op2.toLowerCase());                                      LowerCase Method 

let str = "Abhishek";
console.log(str.substring(2));                                       Substring method 
console.log(str.substring(2,5));

let str_2 = "      Abhishek Jain is a Good person      " ;
console.log(str_2.trim());                                           Trim method ( Remove whitespace [starting and end])

console.log(str.slice(4));
console.log(str.slice(2,5));                                         Slice mathod ( Returns part of string )


console.log(str.replace("i" ,"y"));                                  Replace method ( searchVal , NewVal )

console.log(str.charAt(3));                                          CharAt method 

*/