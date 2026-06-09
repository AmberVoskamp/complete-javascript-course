// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = '23';
if (x === 23) {
  console.log(23);
}

const calcAge = birthYear => 2037 - birthYear;

//console.log(calcAge(2000));

//PROBLEM 1:
// We work for a compant building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understand the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute the max and min temperatures?
// - What's a sensor error? and what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max and return it.

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') {
      continue;
    }

    if (curTemp > max) {
      //Check if this is the new max
      max = curTemp;
    } else if (curTemp < min) {
      //Check if this is the new min
      min = curTemp;
    }
  }

  return max - min;
};

calcTempAmplitude([3, 7, 4, 'error', 23, 0]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1} Understanding the problem
// - With 2 arrays, should we implement functionality twice? Just merch two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') {
      continue;
    }

    if (curTemp > max) {
      //Check if this is the new max
      max = curTemp;
    } else if (curTemp < min) {
      //Check if this is the new min
      min = curTemp;
    }
  }

  return max - min;
};

const amplitude2 = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitude2);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'cels',
    
    // C) FIX
    value: 10, //Number(prompt('Degrees celsius;')),
  };

  // B) FIND
  console.table(measurement);
  
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());

//Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') {
      continue;
    }
    
    if (curTemp > max) {
      //Check if this is the new max
      max = curTemp;
    } else if (curTemp < min) {
      //Check if this is the new min
      min = curTemp;
    }
  }
  
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);

// Coding Challenge 1
const printForecast = function (arr) {
  let forecast = '...';
  
  for (let i = 0; i < arr.length; i++) {
    const curForecast = arr[i];
    forecast += ` ${curForecast}°C in ${i + 1} days ...`;
  }
  
  console.log(forecast);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);

// Coding Challenge #2 (with AI)
function analyzeWorkWeek(hours) {
  if (!Array.isArray(hours) || hours.length !== 7) {
    throw new Error('Input must be an array containing exactly 7 days.');
  }
  
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  
  const totalHours = Number(
    hours.reduce((sum, dayHours) => sum + dayHours, 0).toFixed(1),
  );
  
  const averageDailyHours = Number((totalHours / hours.length).toFixed(1));
  
  const maxHours = Math.max(...hours);
  const busiestDay = days[hours.indexOf(maxHours)];
  
  const daysWorked = hours
  .map((dayHours, index) => (dayHours > 0 ? days[index] : null))
  .filter(Boolean);
  
  const isFullTime = totalHours >= 35;
  
  return {
    totalHours,
    averageDailyHours,
    busiestDay,
    daysWorked,
    isFullTime,
  };
}

// Example
const week = [7.5, 8, 6.5, 0, 8.5, 5, 0];

console.log(analyzeWorkWeek(week));

const week2 = [7.5, 8, 6.5, 0, 8.5];

console.log(analyzeWorkWeek(week2));
*/
