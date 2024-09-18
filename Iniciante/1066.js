let input = require("fs").readFileSync("1066", "utf8");
let lines = input.split("\n");
lines = lines.map(Number);

const postiveOrNegative = function (value) {
  if (value > 0) positivo++;
  if (value < 0) negativo++;
};

let positivo = 0;
let negativo = 0;
let par = 0;
let impar = 0;

for (let i = 0; i < 5; i++) {
  if (lines[i] % 2 === 0) {
    par++;
    postiveOrNegative(lines[i]);
  } else {
    impar++;
    postiveOrNegative(lines[i]);
  }
}

console.log(
  `${par} valor(es) par(es)\n${impar} valor(es) impar(es)\n${positivo} valor(es) positivo(s)\n${negativo} valor(es) negativo(s)`
);
