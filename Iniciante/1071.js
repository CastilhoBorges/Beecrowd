let input = require("fs").readFileSync("1071", "utf8");
let lines = input.split("\n");

const [i1, i2] = lines.map(Number);

let soma = 0;
for (let i = i2 + 1; i < i1; i++) {
  if (i % 2 !== 0) {
    soma += 1;
  }
}

console.log(soma);
