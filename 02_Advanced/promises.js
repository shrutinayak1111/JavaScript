// const promiseOne=new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     console.log("Async is completed")
//     resolve()
// },1000)
// })



// // resolve is directly connected to resolve
// promiseOne.then(()=>{
//     console.log("promise consumed");
// })



// new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("asynch 2");
//     resolve()
//   },1000)
// }).then(()=>{
//     console.log("promise consumed 2");
// })


// const promiseThree=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username:'shruti',age:21})
//     },1000)
// }).then((user)=>{
//     console.log(user);
// })

// const promiseFour=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         let error=true;
//         if(!error){
//         resolve({username:"shruti",password:"123"})
//         }
//         else{
//             reject('ERROR:SOMETHING IS WRONG')
//         }
//     },1000)
// }).then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("finally completed");
// })




// const promiseFive=new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             let error=false;
//             if(!error){
//             resolve({username:"shruti",password:"123"})
//             }
//             else{
//                 reject('ERROR:SOMETHING IS WRONG')
//             }
//         },1000)
//     });
// async function consumePromiseFive(){
// const response=    await promiseFive
// console.log(response);
// }

// consumePromiseFive();


// what if error is present 
// const promiseFive=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         let error=true;
//         if(!error){
//         resolve({username:"shruti",password:"123"})
//         }
//         else{
//             reject('ERROR:SOMETHING IS WRONG')
//         }
//     },1000)
// });
// async function consumePromiseFive(){
//     try {
//         const response=    await promiseFive
// console.log(response);
//     } catch (error) {
//         console.log(error);
        
//     }

// }

// consumePromiseFive();


fetch("https://api.github.com/users/hiteshchoudhary")
.then((response)=>{
    console.log(response);
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})  