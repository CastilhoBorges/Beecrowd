let input = require("fs").readFileSync("1154", "utf8");
let lines = input.split("\n").map(Number);

let sumAges = 0;
let ages = 0;

const calcAverageAge = (age) => {
  if (age > 0) {
    sumAges += age;
    ages++;
    calcAverageAge(lines.shift());
  }
};

calcAverageAge(lines.shift());

console.log(`${(sumAges / ages).toFixed(2)}`);
