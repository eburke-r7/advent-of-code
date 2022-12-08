
// input : list of lists
// find elf carrying most calories
// how many calories is that elf carrying?

const {readFileSync, promises: fsPromises} = require('fs');

function getInput(fileName) {
  const input = readFileSync(fileName, 'utf8');
  const arr = input.split(/\r?\n/);
  // console.log(arr);
  return arr;
}

const calories = getInput('day-01-input.txt');

function sumArray(arr: number[]) {
  return arr.reduce((total, i) => total + i, 0);
}

console.log(sumArray(calories));

function findMaxSubArray(arr: number[]) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      const subArray = arr.slice(i, j + 1);
      const sum = sumArray(subArray);
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
}

// console.log(findMaxSubArray(calories));


// sum sub arrays
// find max sub array