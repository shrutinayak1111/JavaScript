// //Symbol
// const mySymb=Symbol("key1")
// const user={
//     name:"shruti",
//     "full name":"shruti nayak",
//     ["mySymb"]:"key1",
//     age:'20',
//     email:"shrutinayak@mail.com",
//     isValid:true,
//     lastLogin:["monday","saturday"]
// }

// //Accesing Method
// // console.log(user.email);
// // console.log(user["email"]);
// // console.log(user["full name"]);
// // console.log(user["mySymb"]);//symbol accessing


// // user.email="nayak@gmail.com"
// // console.log(user["email"]);
// // Object.freeze(user)
// // user.email="na@gmail.com"
// // console.log(user["email"]);


// user.greeting=function(){
//     console.log("hello user");
// }

// user.greeting1=function(){
//     console.log(`hello user , ${this.name}`);
// }


// // console.log(user.greeting);
// console.log(user.greeting());
// console.log(user.greeting1());





//**********************************OBJECT2**************************** */
// const n={1:'a',2:'b'}
// const m={3:'a',4:'b'}
// // const nm=Object.assign({},n,m) //target,source
// // console.log(nm);

// console.log(Object.keys(m))
// console.log(Object.values(m))
// console.log(Object.entries(m))
// console.log(m.hasOwnProperty('f'))



//****************************OBJECT3***************************** */

const user={
        name:"shruti",
        "full name":"shruti nayak",
        ["mySymb"]:"key1",
        age:'20',
        email:"shrutinayak@mail.com",
        isValid:true,
        lastLogin:["monday","saturday"]
    }

    const {name:shiru}=user
    console.log(shiru);