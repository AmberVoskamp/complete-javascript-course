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

//Lesson 36

//Function expression
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(2000);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const untilRetirement = 65 - age;
    return `${firstName} retires in ${untilRetirement} years`
};

console.log(yearsUntilRetirement(2000, "Amber"));
console.log(yearsUntilRetirement(2000, "Amber"));

//Lesson 37

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
} 

console.log(fruitProcessor(2, 3));

// Lesson 38

const calcAge = function (birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const untilRetirement = 65 - age;
    
    if (untilRetirement > 0){
        console.log(`${firstName} retires in ${untilRetirement} years`);
        return untilRetirement;
    }
    else{
        console.log(`${firstName} has already retired 🎉`);
    return -1;
}

//return `${firstName} retires in ${untilRetirement} years`;
}

console.log(yearsUntilRetirement(2000, "Amber"));
console.log(yearsUntilRetirement(1969, "Robin"));
*/

//Lesson 39 CHALLANGE 1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas){
    if(avgDolphins >= avgKoalas * 2){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if(avgKoalas >= avgDolphins * 2){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else{
        console.log(`No team wins...`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);

//Test 2
scoreDolphins = calcAverage(44, 23, 71);
scoreKoalas = calcAverage(65, 54, 49);

checkWinner(scoreDolphins, scoreKoalas);