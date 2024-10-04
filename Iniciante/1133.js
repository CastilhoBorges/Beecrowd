let input = require("fs").readFileSync("1133", "utf8");
let lines = input.split("\n");

const arr = lines.map(Number);

const menor = Math.min(...arr);
const maior = Math.max(...arr);

for (let i = menor + 1; i < maior; i++) {
  if (i > 2) {
    if (i % 5 === 2 || i % 5 === 3) {
      console.log(i);
    }
  }
}
