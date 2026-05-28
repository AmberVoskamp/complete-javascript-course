/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);


let javascriptIsFun = true; 
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990; // This will cause an error because birthYear is a constant

//const job; // This will cause an error because constants must be initialized at the time of declaration

var job = "programmer";
job = "teacher"; // This is allowed with var

lastName = "Voskamp" //global variable, not recommended
console.log(lastName);


//Math operators
const now = 2036;
const ageJonas = now - 2000;
const ageSarah = now - 2018;

console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Amber";
const lastName = "Voskamp";
console.log(firstName + " " + lastName);

//Assignment operators
let x = 10 + 5; //15
x += 10; //x = x + 10  = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

console.log(now - 2000 > now - 2018);

const now = 2036;
const ageJonas = now - 2000;
const ageSarah = now - 2018;

console.log(now - 2000 > now - 2018);

console.log(25-10-5);

let x, y;
x = y = 25 - 10 - 5; //x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

const firstName = "Amber";
const job = "programmer";
const birthYear = 2000;
const year = 2037;

const amber = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(amber);

const amberNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(amberNew);
console.log(`Just a regular string...`);

console.log("string with \n\
multiple  \n\
lines");

console.log(`String
multiple
lines`);

const age = 15;
const legalDrivingAge = 18;

//If else statement
if (age >= legalDrivingAge)
{
console.log(`Sarah can start driving license 🚗`)
}
else
    {
const yearsLeft = legalDrivingAge - age
console.log(`Sarah is to young. Wait another ${yearsLeft} years :)`)      
}

const birthYear = 2001; //Can't be bellow 1900
let century;

if (birthYear <= 2000)
{
century = 20;
}
else 
    {
century = 21;
}
console.log(century);

// Type conversion
const inputYear = "2000";
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

console.log(Number("Amber"));
console.log(typeof NaN);

console.log(String(25), 25);

//Type coercion
console.log(`I am ` + 25 + ` years old`);
console.log(`23` - `10` - 3);
console.log(`23` * `2`);

let n = `1` + 1; //`11` to sting
n = n - 1; //10
console.log(n);

// 5 Falsy values: 0, "", undefined, null, NaN
//Usefull to see if something is valid
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Amber"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money)
{
console.log(`Don't spend it all ;)`);
}
else 
    {
console.log(`You should get some money!`);
}    

let height = 0;
if(height)
{
console.log(`YAY!, Height is defined`);
}
else
    {
console.log(`Height is UNDEFINED`)
}

const age = "18";
if(age === 18)
{
console.log(`You just became an adult! :D (strict)`);
}
if(age == 18)
{
console.log(`You just became an adult! :D (loose)`);
}

// === is equal to (strict) no type conversion
// ==  is equal to with type conversion

let favorieteNumber = Number(prompt("What is your favoriete number?"));
console.log(favorieteNumber);
console.log(typeof favorieteNumber);

if (favorieteNumber === 23) // 23 === 23
{
    console.log(`Cool! 23 is an amazing number!`);
}
else if (favorieteNumber === 7)
{
console.log(`7 is also a cool number!`);
}
else if (favorieteNumber === 9)
{
console.log(`Owh like 9 lives of a cat 😻 cool!`);
}
else
    {
console.log(`Owh I like 23 or 7 or 9 :(`);
}

if (favorieteNumber !== 23)
{
console.log(`Why not 23?`);
}

const hasDriversLicense = true; //A
const hasGoodVission = true;    //B

console.log(hasDriversLicense && hasGoodVission);
console.log(hasDriversLicense || hasGoodVission);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVission)
// {
//     console.log(`Shara is able to drive`);
// }
// else
    // {
//     console.log(`someone else should drive`);
// }

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVission && isTired);


if (hasDriversLicense && hasGoodVission && !isTired)
{
console.log(`Shara is able to drive`);
}
else
    {
console.log(`someone else should drive`);
}

const day = "sunday";

switch(day) 
{
    case "monday": // day === "monday"
        console.log(`Plan course structure`);
        break;
    case "tuesday":
        console.log(`Do some programing`);
        break;   
        case "wednesday":
            case "thursday":
        console.log(`Work on documentation`);
        break;   
    case "friday":
        console.log(`Meeting day`);
        break;   
        case "saturday":
            case "sunday":
                console.log(`WEEKEND!!!!`);
                break; 
                default:
                    console.log("Not a valid day");
                    break;
                }
                
                if (day === "monday")
                {
                console.log(`Plan course structure`);
            }
else if (day === "tuesday")
{
    console.log(`Do some programing`);
}
else if (day === "wednesday" || day === "thursday")
{
    console.log(`Work on documentation`);
}
else if (day === "friday")
{
console.log(`Meeting day`);
}
else if (day === "saturday" || day === "sunday")
{
console.log(`WEEKEND!!!!`);
}
else
{
console.log("Not a valid day");
}

if (23 > 10) {
    const str = "23 is bigger";
}

const me = "Amber";
console.log(`I'm ${2037 - 2000} years old ${me}`);
*/

const age = 25;
// age >= 18 ? console.log(`I like to drink wine 🍷`) : console.log(`I like to drink water 💧`);

const drink = age >= 18 ? `wine 🍷` : `water 💧`;
console.log(`I like to drink ${drink}`);

let drink2;
if (age >= 18) {
    drink2 = `wine 🍷`;
}
else {
    drink2 = `water 💧`;
}
console.log(`I like to drink ${drink2}`);

console.log(`I like to drink ${age >= 18 ? `wine 🍷` : `water 💧`}`);