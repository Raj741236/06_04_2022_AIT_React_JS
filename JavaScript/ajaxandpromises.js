//AJAX(Asynchronous Javascript and XML/JSON)
// it will create fast and dynamic webpges without reloding the entire webpage
//HTTP Methods
//GET,POST,PUT,DElete

//status code
//200-success
//300-redirection
//400-client side issue
//500-server side issue

// const xhr = new XMLHttpRequest();
// //open a request

// xhr.open('GET',"https://fakestoreapi.com/products",true);

// xhr.onload = function(){
//     if(xhr.status==200){
//         console.log(xhr.responseText);
//     }
// }
// //send the request
// xhr.send();

//promises
//It is a object that may produce a single value sometime in the future:fullfilled or rejected

//3 scenarios
//1. pending
//2.Fullfilled
//3.Rejected

//create a promise
// let partyPromise = false;
// let giveParty = new Promise(function(resovle,reject){
//     setTimeout(()=>{
//         if(partyPromise){
//             resovle('I have given the party');
//         }else{
//             reject('I have not given the party to my friends')
//         }
//     },5000)
// }) 
// console.log(giveParty);

//important methods

//.then()-it is used when the promise is fulfilled
//.catch()-It is used when the promise got rejected.
//.finally()-It will execute in both fullfilled and rejected stste.

// function makePromise(partyPromise){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             if(partyPromise){
//                 resolve('I have given the party');
//             }else{
//                 reject('I have not given the party')
//             }
//         },5000)
//     })
// }

// let partyPromise = makePromise(false);

// partyPromise.then((success)=>console.log(success)).catch((reason)=>console.log(reason)).finally(()=>console.log('Friends are ready for the party'));

//fetch method: It is browser method which is used to make network call
//return type of fetch is promise

// let response = fetch("https://fakestoreapi.com/products")

// console.log(response);
// response.then(function(res){
// res.json().then(function(data){
//     console.log(data);
// })
// })
//promise.all();
//promise.race();
//async await
//It was introduced in ES7(2016).

//async = It will convert your code into asynchronous
//await = It will wait until the promise is either rejected or resolved

// const getData = async()=>{
// const response = await fetch("https://fakestoreapi.com/products");
// const data = await response.json();
// console.log(data);
// }

// getData();
