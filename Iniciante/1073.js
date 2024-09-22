let input = require("fs").readFileSync("1073", "utf8");
let lines = input.split("\n");

lines = lines.map(Number)[0];

for (let i = 1; i <= lines; i++) {
  if (i % 2 === 0) {
    console.log(`${i}^2 = ${i ** 2}`);
  }
}
