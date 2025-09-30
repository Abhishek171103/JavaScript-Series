/* 

<------------------------------- Home Work -------------------------------------------------------------->

---> How to DOM contactLoaded event ka use dynamically script add karn ke liye ??

<-------------------------------------------------------------------------------------------------------->
---> Hoisting -> Var hoisting, function hoisting, class hoisting
                Shift to the top in their scope

---> function Call Stack -> LIFO

---> Why called function first class citizens ? because 
    Hum function ke through bahu saare kaam kar sakte hai.
    -> assign to varible
    -> as argument
    -> return function
    -> use function in Data structure
    -> object as property

---> Varible scoping
                -> Global scope 
                -> function scope
                -> Block scope

---> Temporal dead zone

---> Class -> state/properties and behavior/function
            -> create class and object
            -> public and private
            -> getter and setter
            -> constructor
            -> defult parameter allow to use func. with default values 

---> In-bulit object -> (1) Math :- PI, max, min, round, floor, ceil, abs, random, sqrt, pow etc.
                        (2) Date 

---> Dynamic nature of object 

---> object cloning :-  (1) spread operator
                        (2) assign method (Object.assign)
                        (3) iteration method

---> Garbage collector :- 

---> Error handling :-  Type of Errors
                        (1) Compile time error
                        (2) Run time error

                        Handling :- try{
                                        error
                                    }catch(error){
                                        error ke sath kya karna chahte hai.        // throw block 
                                    }
                                    finally{
                                        It will run everytime.
                                    }

---> DOM :- Document Object Model 
            HTML code convert to JS object called Document.

        <--------------------------- HTML ko change karna JS ke through --------------------------------->

        Access Element by - getElementById(), querySelector(#), querySelectorAll(#)
                            getElementByClassName(), querySelector(.), querySelectorAll(.)
                            getElementByTagName(), querySelector('p'), querySelectorAll('p')

        Update existing element :- innerHTML, outerHTML, textContent, innerText

        Add Element :-  createElement(),
                        appendChild(),                   by default end me add hota hai
                        insertAdjacentElement()
                                        -> Position ->  (1) beforebegin
                                                        (2) afterbegin
                                                        (3) beforeend
                                                        (4) afterend
                                        -> HTML Content

        removel :- removeChild()    opposite of append child

        <------------------ CSS ki properties ko change karna JS ke through ----------------------------->

        Changing CSS -> Inline CSS me change JS ke through
                                        -> .style (get,set)                   Single Inline style
                                        -> .style.cssText (get,set)           Multiple Inline style
                                        -> .setAttribute()                  Yeh CSS ke Attribute ko set kar
                                                                            sakte hai.
                                        -> .className                   Multiple class add kar sakte hai
                                        -> .classList.add, .classList.remove, .classList.toggle


---> Browser Events :- 
            -> (1) Event :- It just like an announcement.
            -> (2) Respond :- Iski process ese hoti hai :-
                        -> (i) event :- like that -> click, double click, key press, scroll.
                        -> (ii) event-target :- Yeh ek type ki entity hai jaha par hamara event  
                                                receive hota hai or possibility rahti hai ki ispe ko event listner ya fr event handler bhi apply kiya ho.
                        -> (iii) Event listener :-  Isme define hota hai ki event target 
                                                    jo bhi event aata hai us par kya action perform karna hai.

                        Example :-  play button par click karna :- click event
                                    play button :- event target
                                    video run/play :- event listener

            -> (3) Data stored :- 
                        -> Kisi element par eventListener add ya remove karna :-
                                -> (1) addEventListener :- Syntex :-            by default Bubbling phase
                                    -> <event-target> .addEventListener <event-type, function->action>

            -> (4) stop
                                -> (2) removeEventListener :- Syntex :- 
                                    -> <event-target> .removeEventListener <event-type, function->action>

            -> (5) Life-cycle :- Phase of events -> (1) Captureing phase
                                                    (2) At-target phase
                                                    (3) Bubbling phase 

                                        Bubbling phase convet to Captureing phase via useCapture = true
                                        syntex :- addEventListener(type, listener, useCapture)

            -> Other Important concept :- 
                        -> Event Object :- 

                        -> Defult action :- .preventDefault()

                        -> Avoiding to many listeners :- .target.nodeName, .target.textContent

                        -> How to DOM contactLoaded event ka use dynamically script add karn ke liye ??    ( H.W. )

<------------------------ Performance improvement check -------------------------------------------------->

---> performance.now() mathod is standerd way in JS that how much time my code is taking to run.

---> Reflow and Repaint :- (1) reflow :- It's a process of calculating position/dimension of element. It is
                                        taking High computationally intensive task

                            (2) repaint :- It's a process of displaying content/element drawing the pixel
                                        by pixel in screen. It is faster than reflow.

            Note -> Code me kam se kam relow or repaint hona chaiye usse code jyada fast hoga.
                    Jitne jyada relow or repaint utna jyada code slow run hoga.

---> Document Fragment :- It is light weight document object -> isme jab hum kisi element ka addition ya 
                        append karte hai to na to ye reflow karega na hi repaint karega. 
                        Syntex :- .createDocumentFragment()

<--------------------------------------------------------------------------------------------------------->

---> (1) Sync code :- Koi bhi esa piece of code jo same time par execute kar jaata hai use Sync code kahte
                        hai. Or ye line by line execute hota hai.

---> (2) Async code :- Opposite of Sync code. Koi bhi esa piece of code jo same time par execute kar sakta
                        hai iski koi gaurantee nahi hoti hai use Async code kahte hai. Ho skta hai ye code run hone me time le or vo time specific ya certain time le. like that setTimeOut() ke through.

    Note :- (Async code -> event loop) Async code ko event loop ke through handle kar sakte hai.

---> Event loop :- Isme 3 important component hote hai.
                -> (1) Call stack :- 
                -> (2) Browser :-
                -> (3) Callback/task queue
<--------------------------------------------------------------------------------------------------------->

---> Promise :- The promise object represents the eventual completion (or failure) of an asynchronous 
                operation and its resulting value. This lets asynchronous methods return values like 
                synchronous methods.

            A promise is in one of these states :-
                -> (1) pending :- initial state, neither fulfilled nor rejected.
                -> (2) resolved/fulfilled :- meaning that the operation was completed successfully.
                -> (3) rejected :- meaning that the operation field.
            
            Syntex :- new Promise (resolve,reject) => {
                
                    }

            Note -> If Promise is fulfilled or iske baad hum koi task karna chahte hai to hum then() 
                    Keyword ka use karte hai and If Promise is rejected to usme hum catch() keyword ka use 
                    kar sakte hai.

                    If  Promise -> fulfilled -> .then()
                        Promise -> rejected -> .catch()

---> API Fatch :-   It provides an interface for fatching resources(including across the network).
                    It is a more powerful and flexible replacement for XMLHttpRequest.
                    It uses Request and response objects. 

---> Async-await -> Iska use karke hum apne asynchronous code ko synchronous code ki tarah behavioru    
                    represent kar sakte hai.
                    -> code sync
                    -> code async   -----------> await
                    -> code sync

        Note :- Async function ek Promise return karta hai.

---> Closures :- It is a combination of a function bundled together with references to its surrounding 
                state. It gives a function access to its outer scope.

                -> closures -> { function + required data
                                                or
                                            lexical scope
                                                or
                                            surrounding state }
                
                -> Ek esa case jis case ke nested function ke andar jo inside function hai vo jis value 
                    par depend hai vo value memory se free ho chuki ho us case me kya hoga ??

                -> closure ka concept hai ki Nested function me inner function apne required data ke sath
                    bind ho jaata hai. Variable ka reference function ke sath bind kar dete hai uski copy
                    nahi hoti hai, uska reference diya jaata hai.
                    
*/

/*

<--------------------------------------------------------------------------------------------------------->

setTimeout((sayMyName) => {
        console.log("My name is Abhishek Jain");                              // Asynchronous function
}, 2000);


let firstPromise = new Promise((resolve, reject) => {
    console.log("Abhishek");                                                // pending state
})

let firstPromise = new Promise((resolve, reject) => {
    console.log("Abhishek");
    resolve(1001);                                                          // fullfilled state
})

let firstPromise = new Promise((resolve, reject) => {
    console.log("Abhishek");
    reject(new Error("Internal server error"));                                 // rejected state
})

let promise1 = new Promise((resolve, reject) => { 
    let success = true;
    if(success){
        resolve("Promise Fulfilled");
    }else{
        reject("Promise Rejected");
    }
})

promise1.then((message) => {                                          resolve -> .then()
    console.log("Then ka message is : " + message);
}).catch((error) => {                                                 reject -> .catch()
    console.log("Error : " + Error);
})

promise1.then((message) => {
    console.log("First message: " + message);
    return "Promise Fulfilled second message"
}).then((message) => {
    console.log("Second message: " + message);                       Promise Chaining 
    return "Promise Fulfilled third message"
}).then((message) => {
    console.log("Third message: " + message);
}).catch((error) => {
    console.log(error);
}).finally((message) =>{                                             Finally Block 
    console.log("Ye to chalega hi sahi.");
})

let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "First");
});
let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "Second");
});
let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 6000, "Third");
});

Promise.all([promise1, promise2, promise3]).then((value) => {                Promise all
    console.log(value);
}).catch((error) => {
    console.error(error);
})

<--------------------------------------------------------------------------------------------------------->


async function getData() {                                         // async function
    setTimeout(() => {
        console.log("I am inside set Timeout block");
    }, 3000);
}
getData();

async function getData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');    get request - async
    let data = await response.json();                                              parse json - async
    console.log(data);
}

async function getData() {
    const url = "https://dummyjson.com/posts";
    const response = await fatch(url);
    let data = await response.json();
    console.log("Get data response: ", data)
}

async function postData() {
    const response = await fatch('https://dummyjson.com/posts/add',{                 // Fatch API
        method: 'POST',
        Headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({                                        // Fatch API me POST add karna
            title: 'Abhishek Jain -> I am Abhishek Jain',
            userId: 5,
        })
    })
    let data = await response.json();
    console.log("Post data response: ", data)
}

async function processData() {
    await postData();
    await getData();
}

<--------------------------------------------------------------------------------------------------------->


*/


function outerFunction() {
    let name = "Abhishek";
    function innerFunction() {
        console.log(name);
    }
    return innerFunction;
}
outerFunction();