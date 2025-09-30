
//--------------------------------------------------------------- Arrays -------------------------------------------------

/*                    Imp = Array ek special type of object hi hota hai.

let Name  = ["Abhishek" , "Chirag" , "Sunil" , "Manish" , "Yudhi"];                          // Create a array
let marks = [23,45,67,12,90];
let info = ["Abhishek" , 86 , "Ajmer"]

console.log(Name[0]);                                                       // Array Indices 
console.log(marks[3]);
console.log(info[1]);
console.log(Name[8]);                                               // Undefiend  


let marks = [23,45,67,12,90];
marks.push(35);
marks.push(40,70,100);                                                     Push method

marks.pop();                                                               Pop method

let Name  = ["Abhishek" , "Chirag" , "Sunil" , "Manish" , "Yudhi"];
console.log(Name.toString());
console.log(marks.toString());                                             toString method ( converts array to string )

let Name  = ["Abhishek" , "Chirag" , "Sunil" ];
let Name2 = ["Manish" , "Yudhi"];
Let Name3 = ["Gaurav" , "Deepak"];

Let ans = Name.concat(Name2);
conole.log(ans);
Let ans2 = Name.concat(Name2,Name3);                          concatenation method ( joins multiple arrays & returns result )


let Name  = ["Abhishek" , "Chirag" , "Sunil" ];
Name.unshift("Deepak");                                                  unshift method ( add to start )
console.log(Name);
Name.shift();                                                            shift method (delete from start & return result )
console.log(Name);

let Name  = ["Abhishek" , "Chirag" , "Sunil" , "Manish" , "Yudhi"];
console.log(Name.slice(1,4));                                             Slice method ( start , end?)

let marks2 = [23,45,67,12,34,21,63,90];
marks2.splice(2,2,102,104);                                         Splice method ( Change original array [add,remove,replace] )
console.log(marks2);                                                splice (startIdx , delInx , newElment )                          

marks2.splice(2,0,800);
console.log(marks2);

marks2.splice(2,1);
console.log(marks2);
*/

// ------------------------------------------------- Practice ------------------------------------------------------------------

let marks = [23,45,67,12,90];            
let sum = 0;

for (let val of marks) {
    sum += val;
}

let avg = sum / marks.length;
console.log(`Avg marks of the class = ${avg}`);                      // Calculate the avg of marks          

let items = [250 , 645 , 300 , 900 , 50 ];
// for (let val of items) {
//     let offer = val / 10;
//     items[idx] = items[idx] - offer;
//     console.log(`Value after offer = ${items[idx]}`);            It is also correct 
//     idx++
// }

for (let index = 0; index < items.length; index++) {
    let offer = items[index] / 10 ;
    items[index] -= offer;
}
console.log(items);

// let Name  = ["Abhishek" , "Chirag" , "Sunil" ];                          
// let Name2 = [45,67,81];                                                                // Code is running

// let ans = Name.concat(Name2);
// console.log(ans);

let marks2 = [23,45,67,12,34,21,63,90];
marks2.splice(2,2,102,104);
console.log(marks2);

marks2.splice(2,0,800);
console.log(marks2);

marks2.splice(2,1);
console.log(marks2);