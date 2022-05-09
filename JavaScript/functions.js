//function declaration

// greetTheUser1();

// function greetTheUser1(){
//     console.log("Welcome user");
// }



//anonymous function:function without a name

//function with no parameters:

//function with parameters

// function greetTheUser(name){
//     console.log("Welcome " + name);
// }
// greetTheUser("ram");


//function with default parameters

// function greetTheUser(name="alex"){
//     console.log("Welcome " + name);
// }
// greetTheUser("ram");
// greetTheUser();

// function gstCalculation(amount,gst=0){
//     const result = amount + ((amount/100)*gst);
//     console.log("The total amount is " + result);
// }
// gstCalculation(10000,18);
// gstCalculation(5000,28);
// gstCalculation(2000);


//function expression or variable function

// const greetTheUser = function(){
//     console.log("welcome user");
// }
// console.log(greetTheUser);
// greetTheUser();


//Self execution function
// (function(){
//     alert('self execution function');
// })();


//function with return statement

// function gstCalculation(amount,gst=0){
//     const result = amount + ((amount/100)*gst);
//     return "The total amount is " + result;
// }
// const result =gstCalculation(10000,5);
// console.log(result);

//recursive function

// function greetTheUser(){
//     console.log("Welcome user");
//     greetTheUser();
// }
// greetTheUser();

//callback function: a function which is passed as an arugument to another function.


// function x(callback){
//    console.log(callback);
//    callback(134,300);
// }
// function y(a,b){
//     const add = a + b;
// console.log("result " + add);
// }
// x(y);


//nested function

function Outer(){
    function inner(){
        console.log("Hi i am nested function");
    }
    inner();
}
Outer()



