let input = require("fs").readFileSync("2006", "utf8");
let lines = input.split("\n");

let [tipo, respostas] = lines;
tipo = Number(tipo);

const filtragem = respostas
  .split(" ")
  .map(Number)
  .filter((a) => a === tipo).length;

console.log(filtragem);
