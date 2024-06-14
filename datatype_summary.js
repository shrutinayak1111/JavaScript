// Primitive/call by value
// String
// number
// boolean
// null datatype=object
// undefined
// symbol
// BigInt
// const id=Symbol('123')
// const id1=Symbol('123')
// console.log(id==id1)
// false
// symbol return unique value


// non-primitive/refrence type
// array
// objects
// functions


// const arr=['shruti','nayak'];
// let object={
//     name:"shruti",
//     age:21
// }

// const func=function(){
//     console.log("hello world")
// }










// javascript is Dynamic Language
//  you can create variable and assign value 10 to it and then you can reassign value for example string “abc” and that’s 
//  pretty fine in javascript.




//  Static Typed Languages
// String a = "abc";

// int b = 10;

// b = "xyz";  //Error



// Dynamic Type Languages

// a = "abc";  //String

// a = 10;  //Number


// Problems with Dynamic Type Language – Javascript
// function a() {
//     console.log("CodezUp")
// }

// a();  //CodezUp

// a = 10;

// a();  //Uncaught TypeError: a is not a function



// //*************************stack heap memory***************** */
// stack(primitve , u will get the object , or copy doesnt chg the original) , heap(non primitive, get the refrence , chng in original value)

// let name="shruti"
// newn=name
// newn='nayak'
// console.log(name)
// console.log(newn)
// shruti 
// nayak

// let user1={
//     name:"shruti",
//     age:21
// }

// let user2=user1
// user2.name='nayak';

// console.log(user1.name);
// console.log(user2.name);
// nayak
// nayak