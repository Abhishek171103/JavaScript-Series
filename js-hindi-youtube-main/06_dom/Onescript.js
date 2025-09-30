// This is only run in Browser Dom 

/*

const tempList = document.querySelectorAll('li')
tempList                                                    Yeh Arry ki tarah hota hai lekin complete 
                                                            Array nahi hota hai.
tempList.style.color = 'Green'                                     // Output => Error
tempList[0].style.color = 'Green'


const myH2 = document.querySelectorAll('h2')
myH2
myH2[1].style.backgroundColor = 'White'
myH2[1].style.color = 'black'


const tempList = document.querySelectorAll('li')
tempList    
tempList.forEach( (li) => {
    li.style.backgroundColor = 'orange'
})


const tempClassList = document.getElementsByClassName('list-item')
tempClassList
tempClassList.forEach( (li) =>{                                             // Error
    console.log(li)                                                 Because HTMLCollection me .forEach ki
})                                                                  property nahi hai isme.
Array.from(tempClassList)                                   HTMLCollection ko Array me convert karna   




*/