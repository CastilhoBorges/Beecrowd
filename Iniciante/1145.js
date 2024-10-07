let input = require("fs").readFileSync("1145", "utf8");
let lines = input.split(" ").map(Number);

const [x, y] = lines;

let count = 1;
let valorLinha = 1;
let valor = 1;
let str = "";

while (count <= y) {
  while (valorLinha <= x) {
    str += `${valor} `;
    valor++;
    valorLinha++;
    count++;
  }
  console.log(str.trim());
  str = "";
  valorLinha = 1;
}
