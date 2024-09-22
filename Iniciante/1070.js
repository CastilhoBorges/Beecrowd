let input = require("fs").readFileSync("1070", "utf8");
let lines = input.split("\n");

const number = Number(lines[0]);
let count = 1;

for (let i = number; count <= 6; i++) {
  if (i % 2 === 1) {
    console.log(i);
    count++;
  }
}
