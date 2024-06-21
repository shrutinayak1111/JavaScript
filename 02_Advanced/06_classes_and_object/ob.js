
//  let user={
//     username:'shruti',
//     loginCount:8,
//     signedIn:true,
//     // getUserDetails: ()=>{
//     //     console.log("got details");
//     // }
//     getUserDetails: ()=>{
//         // console.log(`username :${this.username}`);
// console.log(this);

//     }

// }

//  console.log(user.getUserDetails());
//  console.log(user.username);
// // 



// constructor 
function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    return this
}

// const userOne=User("shruti",12,true)
// const userTwo=User("nayak",23,false)
// // console.log(userOne); --> userTwo will override the userOne


// To avoid override we use keyword 'new' this will help to create new instance of each object 


const userOne=new User("shruti",12,true)
const userTwo=new User("nayak",23,false)
console.log(userOne);
console.log(userTwo);
