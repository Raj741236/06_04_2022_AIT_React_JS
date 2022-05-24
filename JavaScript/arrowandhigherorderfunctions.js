//Arrow functions
//It eas introsuced in ES6(2015).

// const add = function(a){
//     return a+100;
// }
// console.log(add(20));

// //Arrow functions

// const add1 = (a) => {
//     return a+100;
// }
// console.log(add1(20));

// const add2 = () => {
// let c =100;
// let d = 30;
// return c+d+100;
// }
// console.log(add2());

//Higher order functions
//A function which take another function as an argument
//or returns a function from it 
//forEach,map,filter,reduce

// const arr =[2,3,4,6,7];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]*2);
// }

// const forEachresult = arr.forEach((num)=>{
// console.log(num * 2);
// return num*2;
// })

// console.log(forEachresult);

// const mapResult = arr.map((num)=>{
//     console.log(num * 2);
//     return num*2;
// })
// console.log(mapResult);


//filter method

// const arr = [4,2,8,5,9];

// const result = arr.filter((num)=>{
//  return num%2===0;
// })
// console.log(result);

//reduce method
//It applies a function against a accumulator and each element in an array
// to reduce it to a single value

const arr = [2,5,4,7,9];

let sum = 0;

for(let i=0;i<arr.length;i++){
    sum = sum+arr[i];
}
console.log(sum);

//syntax: arr.reduce(callbackfunc,initialvalue)

const result = arr.reduce((accumulator,arrvalue)=>{
return accumulator + arrvalue;
})
console.log(result);
