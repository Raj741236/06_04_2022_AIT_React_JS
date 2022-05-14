// "use strict";
// var a= 1;
// let b=2;
// const c =3;
// isJavaSCriptisEasy = "true";
// console.log(isJavaSCriptisEasy);


// let driversLicense = false;
// let testPassed = true;

// if(testPassed){
//   driverLicense = true;
// }
// if(driversLicense){
//     console.log('You are eleigible for DL');
// }

// let x=5;
// delete x;
// console.log(x);

// const y = {
//     a:1,
//     b:2,
// }

// console.log(y);

// delete y.a;
// console.log(y);


// const let = 5;


//mouse events

// const btn = document.getElementById('btn');
// // const btn2 = document.getElementById('btn2');
// const para = document.querySelector('p');
// const rightClick = document.querySelector('.right-click')

// para.addEventListener('mouseover',function(){

// para.style.backgroundColor = 'red';
// });
// para.addEventListener('mouseleave',function(){
//     para.style.backgroundColor='green'
// })

// rightClick.addEventListener('click',function(e){
//     console.log(e);
//     console.log('right click worked')
// })
// btn2.addEventListener('click',function(){
//     alert('Button2 clicked')
// })


//Form Events:onchange,focus,blur

// const firstName = document.getElementById('firstName');


// firstName.addEventListener('focus',function(){
//     firstName.style.outline = "1px solid red";
// })

// firstName.addEventListener('blur',function(e){
//     firstName.style.outline = "1px solid green";
// })

// firstName.addEventListener('change',function(event){
//    console.dir(event.target)
//    console.log(event.target.value);
//    console.log(event)
// })

//keyboard events:key press,key up,key down

// document.addEventListener('keyup',function(e){
//    console.log(e.key);
  
// });

//page Events:scroll,resize

const div = document.querySelector('.color');
const htmlClasses = document.querySelector('.color').classList;

function toggleColor(){
    if(htmlClasses.contains('primaryColor')){
        htmlClasses.remove('primaryColor');
        htmlClasses.add('secondaryColor');
    }else{
        htmlClasses.remove('secondaryColor')
        htmlClasses.add('primaryColor');
    }
  
};
document.addEventListener('scroll',toggleColor);

window.addEventListener('resize',function(e){
  console.log(e);
  if(window.innerWidth < 800){
      document.body.style.backgroundColor='yellow';
  }
  else{
      document.body.style.backgroundColor = "red";
  }
})



