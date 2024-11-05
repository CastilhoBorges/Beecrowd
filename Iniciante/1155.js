let input = require("fs").readFileSync("1155", "utf8");

let sum = 0;
let result = 0;

for (let i = 1, j = 1; i <= 100; i++) {
  sum += j / i;
}

console.log(Math.round(sum * 100) / 100);
