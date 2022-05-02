const age = 19;

const isEligible = age >= 18;

console.log(!isEligible);

if(!isEligible){
    console.log("You are Eligible for Driver's License");
    
}else{
    console.log("You are not Eligible for Driver's License");
}

//Ternary Operator

//Syntax : condition ? isTRue : isFalse;

const result = age >= 18 ? "You are Eligible for Driver's License" :"You are not Eligible for Driver's License";
console.log(result);


//else-if statement

//Gym workout
//monday: chest,back,bicepsand triceps,abs,leg,restday

const day = 'wednesda';

if(day === 'monday'){
    console.log("today is chest workout");
} else if(day === 'tuesday'){
    console.log("today is Back workout");
} else if(day === 'wednesday'){
    console.log("today is Biceps and Triceps workout");
} else if(day === 'thrusday'){
    console.log("t0day is Abs workout");
} else if(day === 'friday'){
    console.log("t0day is leg workout");
} else if(day === 'saturday' && day === 'sunday'){
    console.log("Rest day");
}else{
    console.log('there is no such day')
}

//switch statement

switch(day){
case 'monday' : 
                console.log("today is chest workout");
                break;
case 'tuesday' : 
                console.log("today is back workout");
                break;

case 'wednesday' : 
                console.log("today is biceps and triceps workout");
                break;

case 'thrusday' : 
                console.log("today is abs workout");
                break;
case 'friday' : 
                console.log("today is leg workout");
                break;
case 'saturday' : 
                console.log("rest day");
                break;
case 'sunday' : 
                console.log("rest day");
                break;
default:   
               console.log("There is no such day")

            
}