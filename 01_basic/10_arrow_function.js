

// user={
//     name:"shruti",
//     age:21,

//     welcomeMessage:function(){
// console.log(`${this.name}, welcome to the hub`);
// // console.log(this); -->shruti, welcome to the hub
// // { name: 'shruti', age: 21, welcomeMessage: [Function: welcomeMessage] }
//    }
// }
// // user.welcomeMessage();-->shruti, welcome to the hub//
// // user.name="shiru"
// //user.welcomeMessage();-->shiru, welcome to the hub
// // console.log(this);--{} becoz here there is no global object no empty but if run
// // in brower there it will not be emoty as the window object is project here in node there is empty object intitaed 
// user.welcomeMessage();





//********************THIS IN FUNCTION************** */
// function one(){
//     console.log(this);
//     inside a function it will various object this mean this keyword inside 
//     a function carries object
// }

// one()




// function one(){
//     let user='shruti'
//     console.log(this.user); 
//     undefined that means this doesnt work under function
   
// }

// one()



//*******************ARROW FUNCTION*************** */

// const one =()=>{
//     name='shruti'
//     console.log(this.name); --> undefined
   
// }

// one()



// const one =()=>{
   
//     console.log(this); --.{}
   
// }

// one()




// const add=(a,b)=>{
//     return a+b

// }
// console.log((add(2,3)));


//****************IMPLICIT RETURN*************** */
// const add=(a,b)=>a+b
//     console.log((add(2,3)));


//  const user=(a,b)=>({name:'shruti'}) 
//  **for object u need to wrap in curly braces
//  console.log(user(34,4));