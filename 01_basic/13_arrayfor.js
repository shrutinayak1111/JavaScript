// const arr=[1,2,3,4]
// for(const num of arr){  //for of
//     console.log(num);
// }


// const greetings='hello world!'
// for(const greet of greetings){
//     console.log(greet);
// }



//MAPS
// const map=new Map()
// map.set('in','india')
// map.set('a','apple')
// map.set('b','ball')

// map.set('c','cat')
// console.log(map);
// for(const key of map ){
//     console.log(key);
//     // [ 'in', 'india' ]
// // [ 'a', 'apple' ]
// // [ 'b', 'ball' ]
// // [ 'c', 'cat' ]
// }

// for(const [key,value] of map ){
//     console.log(key,':-',value);
   
// }


// const obj={
//     'game1':'NFS',
//     'game2':'spiderman'
// }
// for(const [key ,value] of obj){
//     console.log(key,':-',value);
//     //obj is not iterable
//for of doesnt work for object

// }


//FOR IN
// const obj={
//          'game1':'NFS',
//          'game2':'spiderman'
//  }
//  for(const key in obj){
//     console.log(obj[key]);
//  }
 

//  const arr=[1,2,3,4]
//  for(const a in arr){
//     console.log(a);
//  }


//FOR EACH
const alpha=['a','b','c']
// alpha.forEach(function (item){
//     console.log(item);
// })
// alpha.forEach((item)=>{
//     console.log(item);
// })

function print(item) {
    console.log(item);
    
}
alpha.forEach(print)