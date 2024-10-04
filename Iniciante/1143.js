let input = require("fs").readFileSync("1143", "utf8");
let lines = input.split("\n").map(Number);

let nmrLoop = lines[0];
let quadrado = 0;
let cubo = 0;

for (let i = 1, value = 1; i <= nmrLoop; i++, value++) {
  quadrado = value ** 2;
  cubo = value ** 3;
  console.log(`${value} ${quadrado} ${cubo}`);
}
