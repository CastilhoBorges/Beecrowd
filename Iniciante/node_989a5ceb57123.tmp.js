let input = require("fs").readFileSync("1117", "utf8");
let lines = input.split("\n");

const arr = lines.map(Number);
const notas = [];

for (const i of arr) {
  let count = 0;

  while (count < 3) {
    if (i > 0 && i < 11) {
      notas.push(i);
      count++;
    } else {
      console.log("nota invalida");
    }
  }
}

console.log(notas);
