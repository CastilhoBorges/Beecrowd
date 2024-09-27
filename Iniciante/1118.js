let input = require("fs").readFileSync("1118", "utf8");
let lines = input.split("\n");

let notas = [];
let inputs = [];

for (const i of lines) {
  if (i.includes(".")) {
    notas.push(i);
  } else {
    inputs.push(i);
  }
}

inputs = inputs.map(Number);

for (const i of notas) {
  if (i >= 0 && i <= 10) {
    console.log(`media = ${(notas[0] + notas[1]) / 2}`);
  }
}
