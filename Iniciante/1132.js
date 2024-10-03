let input = require("fs").readFileSync("1132", "utf8");
let lines = input.split("\n");

const arr = lines.map(Number);

const menor = Math.min(...arr);
const maior = Math.max(...arr);

let count = 0;

for (let i = menor; i < maior; i++) {
  if (i % 13 === 0) {
    continue;
  } else {
    count = count + i;
  }
}

console.log(count);
