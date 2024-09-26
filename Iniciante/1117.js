let input = require("fs").readFileSync("1117", "utf8");
let lines = input.split("\n");

const arr = lines.map(Number);
const notas = [];

for (const i of arr) {
  if (i < 0 || i > 10) {
    console.log("nota invalida");
  } else {
    notas.push(i);
  }
}

console.log(`media = ${(notas[0] + notas[1]) / 2}`);
