
// ----------------------------------------- OPERATORS ---------------------------------------------

/*

( 1 ) Arithmatic Operator --------> + , - , * , / , % , -- , ++ , ** 

( 2 ) Assignment Operator --------> = , += , -= , *= , /= , %= , **= 

( 3 ) compression Operator -------> == , != , !== , === , < , > , <= , >= 

( 4 ) Logical Operator -----------> AND ( && )
                                    OR ( || )
                                    NOT ( ! )

( 5 ) Ternery Operator -----------> ( condition ? true statement : false statement )

( 6 ) Biitwise Operator ----------> AND ( & )
                                    OR ( | )
                                    NOT ( ~ )
                                    Left shift ( << )
                                    Right shift ( >> )
                                    XOR ( ^ )

Most Important = Working with non- boolean

example -:  ( false && " Abhishek ") ----> False
            ( True && " 3 ") ------------> True 
            ( False || " Abhishek ") ----> True 
            ( True || " 3 ") ------------> True 

*/


// -------------------------------------- Conditional Statement --------------------------------------

/*

( 1 ) If statement

( 2 ) If-else Statement 

( 3 ) else-if statement 

( 4 ) switch statement 

*/


// ----------------------------------------- IMPORTANT TERM -------------------------------------------

/*

alert ( " hello ! ");       // Create a one time popup

let Name = prompt( " Enter your Name  ");
console.log(Name);

*/

//---------------------------------------------- PRACTICE ------------------------------------------------

let num = prompt("Enter your number ");

if ( num % 5 === 0) {
    console.log(num , " is multiple of 5. ");
} else {
    console.log(num , " is not multiple of 5. ");
}

let score = prompt(" Enter your marks ( 0 - 100 ) ");
let grade;

if ( score >= 90 && score <= 100) {
    grade = " A ";
}else if ( score >= 70 && score <= 89) {
    grade = " B ";
}else if ( score >= 60 && score <= 69) {
    grade = " c ";
}else if ( score >= 50 && score <= 59) {
    grade = " D ";
}else{
    grade = " F ";
}

console.log(" According to your score , your grade was : " , grade);