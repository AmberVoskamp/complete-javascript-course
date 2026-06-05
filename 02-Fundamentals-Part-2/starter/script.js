//Lesson 33
"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
//const private = 534;

//Lesson 34
function logger(){
    console.log(`My name is Amber`);
}

// Calling / Running / Invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
} 

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);
*/

//Lesson 35 
const age1 = calcAge1(2000);

//Function declaration
function calcAge1 (birthYear){
    return 2037 - birthYear;
}

//Function expression
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(2000);

console.log(age1, age2);