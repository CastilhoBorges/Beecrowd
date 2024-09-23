let input = require("fs").readFileSync("1080", "utf8");
let lines = input.split("\n");

const arrNumbers = lines.map(Number);
const maiorValor = Math.max(...arrNumbers);

console.log(maiorValor);
console.log(arrNumbers.indexOf(maiorValor) + 1);
