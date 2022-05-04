let student1 = null;
const student2 = "ramnath";
const student3 = "Alex";
const student4 = "Anitha";
const student5 = "Ram";

const student = ["kiran","ramnath","alex","anitha","ram"];

student[4]="shyam";

console.log( student)

console.log(student[0]);
console.log(student[1]);
console.log(student[2]);
console.log(student[3]);

const kiran = ["kiran",26,"bangalore",["reading","cricket","watching tv"],true]

console.log(kiran);


//objects

const kiran1 = {
    name : "kiran",
    age : 26,
    place : "bangalore",
    obbies : ["reading","cricket","watching tv"],
}
console.log(typeof kiran1);

//Array of objects

const kiran3 = [{
    name : "kiran",
    age : 26,
    place : "bangalore",
    obbies : ["reading","cricket","watching tv"],
}] 

console.log(kiran3);

//loops

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);

/*
  1. for loop
  2. while loop
  3. do-while loop
  4. for-in loop
  5. for-of loop
*/
//for loop
for(let i = 1; i <= 8;i++){

    console.log(i)
}

//while loop
 
let someNumber = 10;
while(someNumber <= 100){
    // debugger;
    console.log(someNumber);
    someNumber++;
    
    
}

//do-while loop

let num = 190;

do{
    console.log(num);
}while (false);