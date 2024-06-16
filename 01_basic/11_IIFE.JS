//Immediately Invoked Function Expressions (IIFE)


(function one(){
    //named iife
    console.log('shruti')
})
();


//use of colon is important as it will to write two function

((name)=>(
    //unamned iife
    console.log(`name is ${name}`)
))
("shruti");



// we use iife to immediate execute and to remove global scope variable pollution 
// we just need to add parathesis before and ending of the function