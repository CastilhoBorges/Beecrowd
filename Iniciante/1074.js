let input = require("fs").readFileSync("1074", "utf8");
let lines = input.split("\n");

lines = lines.map(Number);

const inicial = lines.shift();

for (let i = 0; i < inicial; i++) {
  if (lines[i] > 0 && lines[i] % 2 === 0) {
    console.log(`EVEN POSITIVE`);
  } else if (lines[i] < 0 && lines[i] % 2 === 0) {
    console.log(`EVEN NEGATIVE`);
  } else if (lines[i] > 0 && lines[i] % 2 !== 0) {
    console.log(`ODD POSITIVE`);
  } else if (lines[i] < 0 && lines[i] % 2 !== 0) {
    console.log(`ODD NEGATIVE`);
  } else {
    console.log(`NULL`);
  }
}

