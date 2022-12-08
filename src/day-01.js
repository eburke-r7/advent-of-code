// input : list of lists
// find elf carrying most calories
// how many calories is that elf carrying?
var _a = require('fs'), readFileSync = _a.readFileSync, fsPromises = _a.promises;
function getInput(fileName) {
    var input = readFileSync(fileName, 'utf8');
    var arr = input.split(/\r?\n/);
    // console.log(arr);
    return arr;
}
var calories = getInput('day-01-input.txt');
function sumArray(arr) {
    return arr.reduce(function (total, i) { return total + i; }, 0);
}
console.log(sumArray(calories));
function findMaxSubArray(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            var subArray = arr.slice(i, j + 1);
            var sum = sumArray(subArray);
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
