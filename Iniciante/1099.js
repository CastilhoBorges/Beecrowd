let input = require("fs").readFileSync("1099", "utf8");
let lines = input.split("\n");

const value = Number(lines.shift());

for (let i = 0; i < value; i++) {
  const arr = lines[i].split(" ").map(Number);
  const maior = Math.max(...arr);
  const menor = Math.min(...arr);

  let count = 0;

  for (let i = menor + 1; i < maior; i++) {
    if (i % 2 !== 0) {
      count += i;
    }
  }

  console.log(count);
}
