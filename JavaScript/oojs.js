//Object Oriented JavaScript(OOJS)

//What are objects in JavaSCript?
//Objects is another datatype which is used to store information in a key:value pair

//How to create an object?
//Literal way of creating an object
// let product = {
//   name: "I Phone",
//   model: 13,
//   description:
//     "The iPhone 13 models come in 5.4 and 6.1-inch sizes, with the 5.4-inch iPhone 13 Pro positioned as Apple's smallest iPhone.",
//   price: 100000,
// };

//How can i access this object value?
//1. Dot notation

// console.log(product.price);

// //2. Square bracket notation

// console.log(product['name']);

// let arr = ["A","B"];

// console.log(arr[0])

//How many ways we can create objects?

//2. Constructor  way of creating object

// const func = function () {
//   console.log(this);
// };
// func();

// function Cart() {
//   this.items = [
//     {
//       name: "I Phone",
//       model: 13,
//       description:
//         "The iPhone 13 models come in 5.4 and 6.1-inch sizes, with the 5.4-inch iPhone 13 Pro positioned as Apple's smallest iPhone.",
//       price: 100000,
//     },
//     {
//         name: "I Phone",
//         model: 12,
//         description:
//           "The iPhone 12 models come in 5.4 and 6.1-inch sizes, with the 5.4-inch iPhone 13 Pro positioned as Apple's smallest iPhone.",
//         price: 80000,
//       },
//       {
//         name: "I Phone",
//         model: 11,
//         description:
//           "The iPhone 11 models come in 5.4 and 6.1-inch sizes, with the 5.4-inch iPhone 13 Pro positioned as Apple's smallest iPhone.",
//         price: 50000,
//       },
//   ];
// }
// let cartObj = new Cart();

// console.log(cartObj);

//What are predefined and userdefined objects?
//document-literal
//Date-constructor
//window-literal
//event-literal
//Math-literal
//Promise-constructor

//How to add a behaviour to the object

let product = {
  name: "I Phone",
  model: 13,
  description:
    "The iPhone 13 models come in 5.4 and 6.1-inch sizes, with the 5.4-inch iPhone 13 Pro positioned as Apple's smallest iPhone.",
  price: 100000,
  details: function(){
     return `<h1>${this.name} ${this.model}</h1>
            <p>${this.description}</p>
            <button>Add to cart</button>
     `
  },
  gstCalc : function(gstPercent){
    return this.price+((this.price*gstPercent)/100);
  }
};

console.log(product.name);
console.log(product.details());

console.log(product.gstCalc(10));


//Procedure Oriented programming(POP) and Object oriented programming(OOP)

//object oriented principles

//Data Abstraction
//Data Encapsulation
//Polymorphism
//Inheritance

//DataEncapsulation
//wrapping data and member functions in a single unit

//Data Abstraction
//Hiding a data from externaln world

//PolyMorphism
//To amke use of object into many forms

// console.log(20 + 30)

// console.log("20" + 30);

//inheritance
//Acquring properties and methods from parent to child class




