/*
const country = "Netherlands";
const continent = "Europe";
let population = 17.4; // in millions
const isIsLand = false;
const laguage = "Dutch";
//isIsland = true; // This will cause an error because isIsland is a constant and cannot be reassigned

console.log(isIsLand);
console.log(population);
console.log(country);
console.log(laguage);


console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);

const description = country + " is in " + continent + ", and its " + population + " million people speak " + laguage;
console.log(description);
*/

/*
//Code CHALLENGE 1
const massMark = 95; // in kg
const heightMark = 1.88; // in meters

const massJohn = 85; // in kg
const heightJohn = 1.76; // in meters

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

//Code CHALLENGE 2
if (markHigherBMI)
{
console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}
else
    {
console.log(`John's BMI (${BMIJohn}) is higher than Mark's! (${BMIMark})`);
}

//Code CHALEENGE 3
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins > scoreKoalas) //Dolphins win
// {
    //     console.log(`Dolphins win the trophy 🏆`);
    // }
    // else if (scoreKoalas > scoreDolphins) // Koalas win
    // {
        //     console.log(`Koalas win th trophy 🏆`);
// }
// else // They both win
// {
    //     console.log(`Both win the trophy`);
    // }

    const scoreDolphins = (97 + 112 + 81) / 3;
    const scoreKoalas = (109 + 95 + 56) / 3;

    if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) //Dolphins win
    {
        console.log(`Dolphins win the trophy 🏆`);
    }
    else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) // Koalas win
    {
        console.log(`Koalas win th trophy 🏆`);
    }
    else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100) // They both win
    {
        console.log(`Both win the trophy 🏆🏆`);
    }
    else
        {
    console.log(`No one wins the trophy 😭`)
}
*/

//Code CHALEENGE 4
/*
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430
const bill = 40;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/