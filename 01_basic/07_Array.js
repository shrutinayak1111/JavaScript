// shallow copy --> Reference call / chg in original 
// deep copy --> not a refrence call / make a copy 
// const arr=[1,2,3,4,5]
// arr.push(7)

// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.unshift(8)
// console.log(arr);
// arr.shift()
// console.log(arr);

// console.log(arr.includes(3));
// console.log(arr.indexOf(9));


// console.log(arr.join()); it joins but it convert it into string not an array anymore
// console.log(typeof arr.join());



// Slice , Splice

// const n=arr.slice(1,3)
// console.log(n);
// console.log("b ",arr);

// const m=arr.splice(1,3)
// console.log("c" ,arr); //the range portion is deleted from original array
// console.log(m);






//**************************************ARRAY2*********************************** */

// const flower=['lily','rose','jasmine','daisy']
// const animal=['lion','monkey','goat','tiger']
// // flower.push(animal)
// // console.log(flower);
// // const ans =flower.concat(animal);
// // console.log(ans[3][1]);
// const new_ans=[...flower,...animal];
// console.log(new_ans);


// const a=[12,4,5,6,[5,3,6],[7,5,75,[6,6,7,]]]
// console.log(a.flat(Infinity));


// console.log(Array.isArray("shruti"));
// console.log(Array.from("shruti"));
// console.log(Array.from({name: "shruti"}));


let a=100
let b=200
let c=300
console.log(Array.of(a,b,c));