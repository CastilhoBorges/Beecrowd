let input = require("fs").readFileSync("1144", "utf8");
let lines = input.split("\n").map(Number);

for (let count = 1, l1 = 1, l1a = 1; count < lines[0] * 2; ) {
  console.log(`${l1}`);
  console.log(`${l1}`);
}
