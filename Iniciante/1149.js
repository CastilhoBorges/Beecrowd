let input = require("fs").readFileSync("1149", "utf8");
let lines = input.split(" ").map(Number);

let a = lines.shift();
let sum = a;

for (const x of lines) {
  if (x > 0) {
    for (let i = 0; i <= x - 1; i++) {
      sum += i;
    }
  } else {
    continue;
  }
}

console.log(a + sum);