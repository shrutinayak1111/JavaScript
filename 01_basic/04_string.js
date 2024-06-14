const name='shruti'
const age='21'
const newName=new String('shruti')
// console.log(`Hello my name is ${name.toUpperCase()} and my age is ${age}`)
// console.log(newName);
// console.log(newName[4]); --> t
// console.log(newName.__proto__); --> {}

// console.log(newName.substring(0,4)); -->shru
// console.log(newName.slice(-3,6));-->uti 


// const user="  shruti        "
// console.log(user); --> with space shruti
// console.log(user.trim()); --> shruti no space

const email="shrutinayak02000@30gmail.com";
console.log(email.replace('30',''))-->shrutinayak02000@gmail.com
console.log(email.includes("shruti"))--> true
console.log(email.split("0"))-->[ 'shrutinayak', '2', '', '', '@3', 'gmail.com' ]