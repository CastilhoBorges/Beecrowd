let input = require("fs").readFileSync("1078", "utf8");
let lines = input.split("\n");

const value = lines.map(Number)[0];

for (let i = 1; i <= 10; i++) {
  console.log(`${i} x ${value} = ${i * value}`);
}
