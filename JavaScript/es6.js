//Loops  for-inloop,for-of loop
// const arr = [1,2,3,4,5];
// const str = "Youtube"
// const obj = {
//     a:1,
//     b:2
// }

// // for(let ele of arr){
// //     console.log(ele);
// // }
// console.log(arr);

// for(const n in arr){
//     console.log(arr[n]);
// }

//Destructuring
//It is used to create variables from values in arrays and objects

// const mnc =[,"Wipro","Accenture","L&T"];

// let mnc1 = mnc[0];
// console.log(mnc1);

// let mnc2 = mnc[1];
// console.log(mnc2);

// let mnc3 = mnc[2];
// console.log(mnc3);

// const [mnc1,...restMnc]=mnc;

// console.log(mnc1);
// console.log(restMnc)

// const[mnc1="Infosys",mnc2="wipro",mnc3="Accenture",mnc4="L&T"]= mnc
// console.log(mnc1);
// console.log(mnc2);
// console.log(mnc3);
// console.log(mnc4);

//Object Destructuring

// const user = {
    
//     age : 26,
//     place : "bangalore",
// }

// // const name = user.name

// const {name="identity",age,place}=user;

// console.log(name);
// console.log(age);
// console.log(place);

//Nested Destructuring


// const user = {
//     name : "Rajashekar",
//     age : 26,
//     place : "bangalore",
//     obbies : {
//         books : "The Secret",
//         sports : "cricket"
//     }
// }

// const {name,age,place,obbies:{books,sports}}=user;

// console.log(name);
// console.log(age);
// console.log(place);
// console.log(books);
// console.log(sports);

//Rest and spread operator

//spread operator(...)

// let arr1 = [1,2,3,4];
// let arr2 = [5,6,7,8];

// let combinedArray = [...arr1,...arr2]

// console.log(combinedArray);

// function sum(num1,num2,num3){
//     console.log(num1);
//     console.log(num2);
//     console.log(num3);
// console.log(num1 + num2 + num3);
// }
// const params = [1,2,3];
// sum(...params)

// function sum(...args){
// // console.log(arguments);
// // let args = Array.from(arguments);
// // console.log(args)
// console.log(args.reduce((acc,currentValue)=>{
//     return acc+currentValue;
// }))
// }
// sum(2,3);
// sum(2,3,4);
// sum(2,6,4,5,6,87);

//optional chaining

// let employee = {
//     designation : "software engineer",
//     name : {
//         firstName : "Rajashekar",
//         lastName : "A S",
//     },
    
    
//     skills:["HTML","CSS","Javascript","React"]
// }
// const experience = `${employee?.experience?.years==undefined ? 0 : employee?.experience?.years}years ${employee?.experience?.months==undefined ? 0 : employee?.experience?.months}months ${employee?.experience?.days==undefined ? 0 : employee?.experience?.days}day`;

// console.log(experience);

// let experience = '';

// if(employee.experience ){
//     if(employee.experience.years !== undefined){
//         experience += `${employee.experience.years }years`
//     }else{
//         experience += `${0}years`
//     }
//     if(employee.experience.months !== undefined){
//         experience += `${employee.experience.months }months`
//     }else{
//         experience += `${0}months`
//     }
//     if(employee.experience.days !== undefined){
//         experience += `${employee.experience.days }days`
//     }else{
//         experience += `${0}days`
//     }
// }
// console.log(experience);


