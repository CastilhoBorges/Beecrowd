let input = require("fs").readFileSync("1071", "utf8");
let lines = input.split("\n");

const [maior, menor] = lines.map(Number);
const arr = [];

for (let i = menor + 1; i < maior; i++) {
  arr.push(i);
}

console.log(arr.filter((a) => a % 2 !== 0).reduce((acc, i) => acc + i, 0));
