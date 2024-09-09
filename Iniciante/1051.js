let input = require("fs").readFileSync("1051", "utf8");
let lines = input.split("\n");

const number = Number(lines[0]);

let s1 = 1000 * 0.08;
let s2 = 1500 * 0.18;

if (number <= 2000) {
  console.log(`Isento`);
} else if (number > 2000 && number <= 3000) {
  console.log(`R$ ${((number - 2000) * 0.08).toFixed(2)}`);
} else if (number > 3000 && number <= 4500) {
  console.log(`R$ ${(s1 + (number - 3000) * 0.18).toFixed(2)}`);
} else {
  console.log(`R$ ${(s1 + s2 + (number - 4500) * 0.28).toFixed(2)}`);
}
