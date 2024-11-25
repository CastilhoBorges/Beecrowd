let input = require("fs").readFileSync("1156", "utf8");
let lines = input.split("\n").map(Number);

let sum = 0;

for (let n = 1, d = 1; n <= 39; n += 2, d *= 2) {
  sum += n / d;
}

console.log((Math.round(sum * 100) / 100).toFixed(2));
