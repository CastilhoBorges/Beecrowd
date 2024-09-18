let input = require("fs").readFileSync("1065", "utf8");
let lines = input.split("\n");
lines = lines.map(Number);

let pares = 0;

for (let i = 0; i < 5; i++) {
  if (lines[i] % 2 === 0) pares++;
}

console.log(`${pares} valores pares`);
