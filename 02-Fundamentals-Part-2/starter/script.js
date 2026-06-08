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

// Lesson 40

const friend1 = "Janco";
const friend2 = "Eline";
const friend3 = "Sabrina";

const friends = ["Janco", "Eline", "Sabrina"];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Noor";
console.log(friends);
// friends = ["Bob", "Elsa"] //NOT ALLOWED

const firstName = "Amber";
const amber = [firstName, "Voskamp", 2037 - 2000, "Programmer", friends];
console.log(amber);
console.log(amber.length);

// Exercise
const calcAge = function (birthYear){
    return 2037 - birthYear;
}

const years = [1990, 1967, 2000, 2010, 2018];

// console.log(calcAge(years));
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

//Lesson 41

const friends = ["Janco", "Eline", "Sabrina"];

//Add elements
const newLenght = friends.push("Renske");
console.log(friends);
console.log(newLenght);

friends.unshift("Nick");
console.log(friends);

//Remove elements
friends.pop(); // Last
const popped = friends.pop(); // Last

console.log(friends);
console.log(popped);

friends.shift() // First
console.log(friends);

console.log(friends.indexOf("Eline"));
console.log(friends.indexOf("Nick"));

friends.push(23);
console.log(friends.includes("Eline"));
console.log(friends.includes(23));

if (friends.includes("Janco")){
    console.log("You have a friend called Janco");
}

//Lesson 42 CHALLANGE 2
const calcTip = function (billValue){
    //return 15% if it is between 50 and 300 otherwise return 20%
    return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
}

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const totals = [bills[0] + tips [0], bills[1] + tips [1], bills[2] + tips [2]];
console.log(totals);

//Lesson 43
const amberArray = [
    "Amber",
    "Voskamp",
    2037 - 2000,
    "programmer",
    ["Janco", "Eline", "Sabrina"]
];

const amber = {
    firstNme: "Amber",
    lastName: "Voskamp",
    age: 2037 - 2000,
    job: "programmer",
    friends: ["Janco", "Eline", "Sabrina"]
};

//Lesson 44
const amber = {
    firstName: "Amber",
    lastName: "Voskamp",
    age: 2037 - 2000,
    job: "programmer",
    friends: ['Janco', 'Eline', 'Sabrina']
};

console.log(amber);

console.log(amber.lastName);
console.log(amber["lastName"]);

const nameKey = "Name";
console.log(amber[`first${nameKey}`]);
console.log(amber[`last${nameKey}`]);

//console.log(amber.`last${nameKey}`)

const interestedIn = prompt("what do you want to know about jonas? Choose between firstName, lastName, age, job, and friends");

if (amber[interestedIn]){
    console.log(interestedIn, amber[interestedIn]); 
} else {
    console.log("Wrong request! Choose between firstName, lastName, age, job, and friends");
}

amber.location = "Netherlands";
amber["socials"] = "@AmfoxVR";
console.log(amber);

// Challenge
// Amber has 3 friends, and her best friend is called Micheal;
console.log(`${amber.firstName} has ${amber.friends.length}, and her best friend is called ${amber.friends[0]}`);

//Lesson 45

const amber = {
    firstName: "Amber",
    lastName: "Voskamp",
    birthYear: 2000,
    job: "programmer",
    friends: ['Janco', 'Eline', 'Sabrina'],
    hasDriversLicense: true,
    
    // calcAge: function (birthYear){
        //     return 2037 - birthYear;
        // }
        
        //  calcAge: function (){
            //     return 2037 - this.birthYear;
    // }
    
    calcAge: function(){
        this.age = 2037 - this.birthYear
        return this.age;
    },
    
    // Challenge
    // "Amber is a 37 year old programmer, and he has a / no driver's license"
    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
    }
};

console.log(amber.calcAge());
console.log(amber.age);

console.log(amber.age);
console.log(amber.age);

console.log(amber.getSummary());

//console.log(amber['calcAge']());

//Lesson 46 CHALLANGE 3
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    
    calcBMI: function (){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    } 
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    
    calcBMI: function (){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    } 
}

const markHigherThanJohn = mark.calcBMI() > john.calcBMI();
const higherBMI = markHigherThanJohn ? mark : john;
const lowerBMI = markHigherThanJohn ? john : mark;

console.log(`${higherBMI.fullName}'s BMI (${higherBMI.bmi}) is higher than ${lowerBMI.fullName}'s (${lowerBMI.bmi})!`);
*/

//Lesson 47
// console.log('Lifting weights repitition 1 🏋️');
// console.log('Lifting weights repitition 2 🏋️');
// console.log('Lifting weights repitition 3 🏋️');

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repitition ${rep} 🏋️`);
}