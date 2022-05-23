//Date and Math objects

//Date

const dt = new Date();

const todayDate = dt.getDate();
const currentYear = dt.getFullYear();
const currentMonth = dt.getMonth()+ 1;

const completeDate = `${todayDate}/${currentMonth}/${currentYear}`;

console.log(completeDate);

// Mon 23/May/2022

// console.log(dt.getDay());

//Math Object(max,min,round,floor,ceil,random);

//max and min

// console.log(Math.min(1,4,7,8,3));

//round,floor,ceil

// console.log(Math.ceil(73.167743));

//random

// console.log(Math.random());
// const randomNumber = document.getElementById('randomNumber');

// const btn = document.getElementById('btn');

// btn.addEventListener('click',function(){
//     const result = Math.random() * 100000;
//     randomNumber.value = Math.floor(result);
// });

//set Timeout and setinterval

// setTimeout(function(){
//   alert('Pop up')
// },5000);

// setInterval(function(){
//     alert('pop up')
// },1000)
const countDisplay = document.getElementById('count');
let count=0;

setInterval(function(){
    if(count < 1000){
   count++;
   countDisplay.innerHTML = count;
    }
},10);