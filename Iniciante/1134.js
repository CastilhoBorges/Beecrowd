let input = require("fs").readFileSync("1134", "utf8");
let lines = input.split("\n");

const arr = lines.map(Number);
let alcool = 0;
let gasolina = 0;
let diesel = 0;
let inputs = 0;

const getNumber = () => (inputs = arr.shift());
getNumber();

while (inputs !== 4) {
  if (inputs > 4 || inputs < 1) {
    getNumber();
  } else {
    if (inputs === 1) {
      alcool++;
      getNumber();
    } else if (inputs === 2) {
      gasolina++;
      getNumber();
    } else {
      diesel++;
      getNumber();
    }
  }
}

console.log(
  `MUITO OBRIGADO\nAlcool: ${alcool}\nGasolina: ${gasolina}\nDiesel: ${diesel}`
);
