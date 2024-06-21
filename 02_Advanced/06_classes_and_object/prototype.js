// let user="shruti      "
// console.log(user.mylength);

// let heros=["thor","spiderman"]
// let power={
//     thor:"hammer",
//     spiderman:"sling",
//     getSpiderPower:function(){
//         console.log(`spidey power is ${this.spiderman}`);
//     }

// }
// Array.prototype.heyShruti=function(){
//     console.log("shruti says hello");
// }
// Object.prototype.shruti=function(){
//     console.log("shruti is present in all objects")
// }
// power.shruti() -->shruti is present in all objects
// heros.heyShruti()-->shruti says hello
// power.heyShruti()



// INHERITANCE
// const user={
//     name:"shruti",
//     age:21
// }
// const Teacher={
//     makeVideo:true
// }
// const TeachingSupport={
//     isAvailable:false
// }
// const TAsupport={
//     makeAssign:'js',
//     fullTime:true,
//     __proto__:TeachingSupport

// }
// Teacher.__proto__=user



// // modern syntax
// Object.setPrototypeOf(TeachingSupport,Teacher)

String.prototype.trueLength = function() {
    console.log(`${this}`); // This will log the string itself
    // console.log(`${this.user}`); 

    console.log(`length is ${this.trim().length}`); // This will log the trimmed length of the string
};

let anotherUser = "Shiru";
anotherUser.trueLength();
"anubhav".trueLength();
