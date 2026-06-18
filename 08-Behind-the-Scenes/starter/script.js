'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age} born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //Creating NEW variable with same name as outer scrop's variable
      const firstName = 'Robin';
      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str);
    console.log(millenial);
    //console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Amber';

calcAge(1991);
//console.log(age);
//printAge();

console.log(me);
// console.log(job);
// console.log(year);

var me = 'Amber'; // hoisted to undefined
let job = 'teacher';
const year = 2000;

//Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) {
    deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

//console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  //console.log(this);
};

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  //console.log(this);
};

calcAgeArrow(2000);

const amber = {
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

amber.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = amber.calcAge;
matilda.calcAge();

const f = amber.calcAge;
f();
