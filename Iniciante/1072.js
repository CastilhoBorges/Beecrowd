let input = require("fs").readFileSync("1072", "utf8");
let lines = input.split("\n");
lines = lines.map(Number);

const n = lines.shift();
let dentro = 0;
let fora = 0;

for (let i = 0; i < n; i++) {
  if (lines[i] >= 10 && lines[i] <= 20) {
    dentro++;
  } else {
    fora++;
  }
}

console.log(`${dentro} in\n${fora} out`);
