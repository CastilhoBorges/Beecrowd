let input = require("fs").readFileSync("1095", "utf8");
let lines = input.split("\n");

for (let i = 1, j = 60; i <= 37 && j >= 0; i += 3, j -= 5) {
  console.log(`I=${i} J=${j}`);
}
