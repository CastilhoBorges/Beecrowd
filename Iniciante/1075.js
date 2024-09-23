let input = require("fs").readFileSync("1075", "utf8");
let lines = input.split("\n");

const value = lines.map(Number)[0];

for (let i = 1; i < 10000; i++) {
  if (i % value === 2) console.log(i);
}

