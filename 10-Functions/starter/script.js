'use strict';
/*
// 135
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers,
) {
  // The ES5 way
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
//Set it to undefined to skip setting the numPassengers
createBooking('LH123', undefined, 1000);

// 136
const flight = 'LH234';
const amber = {
    name: 'Amber Voskamp',
  passport: 45362727980,
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Miss ' + passenger.name;
    
    if (passenger.passport === 45362727980) {
        alert('Check in');
    } else {
        alert('Wrong passport!');
}
};

checkIn(flight, amber);
console.log(flight, amber);

// Is same as doing ...
const flightNum = flight;
const passenger = amber;

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000000000);
};

newPassport(amber);
checkIn(flight, amber);

// 138

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    
    console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
    console.log('✋');
};

document.body.addEventListener('click', high5);

const arr = ['jonas', 'amber', 'adam'].forEach(high5);
// 139

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name} 👋`);
    };
};

const greeterHey = greet('Hey');
greeterHey('Amber');
greeterHey('Henk');

greet('Hello')('Amber');

// Challenge
const farwell = goodbye => name => console.log(`${goodbye} ${name} 👋`);

farwell('bye')('Henk🦆');
// 140
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name: name });
  },
};

lufthansa.book(234, 'Amber Voskamp');
lufthansa.book(281, 'Henk the Duck');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowigns',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Call method
// book(23, 'Donald Duck');
book.call(eurowings, 23, 'Donald Duck');
console.log(eurowings);

book.call(lufthansa, 234, 'Mary Poppins');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 687, 'Mary Poppins');

// Apply method
const flightData = [687, 'Mister Banks'];
book.apply(swiss, flightData);
console.log(swiss);

// Modern javascript preference:
book.call(swiss, ...flightData);

// 141
//book.call(eurowings, 23, 'Donald Duck');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Daisy Duck');
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Amber Voskamp');
bookEW23('Micky Mouse');

// with Event Listeners
lufthansa.planes = 300;
lufthansa.buyNewPlane = function () {
  console.log(this);
  
  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyNewPlane();

document
.querySelector('.buy')
.addEventListener('click', lufthansa.buyNewPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//addVAT = value => value + value * 0.23;
console.log(addVAT(300));

// Challenge do it with a function in a function
const addSugarTax = function (value) {
  return addTax(0.06, value);
};
console.log(addSugarTax(14));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

// 143
const runOnce = function () {
    console.log(`This will never run again`);
};

runOnce();

// IIFE
(function () {
    console.log(`This will never run again`);
    const isPrivate = 23;
})();

//console.log(isPrivate);

(() => console.log(`This will also never run again`))();

{
    const isPrivate = 23;
    var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);

// 144
const secureBooking = function () {
  let passengerCount = 0;
  
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker(); //1 passengers
booker(); //2 passengers
booker(); //3 passengers

console.dir(booker);
*/

// 145

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(() => {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

setTimeout(() => {
  console.log(`timer`);
}, 1000);

const perGroup = 1000;
boardPassengers(180, 3);
