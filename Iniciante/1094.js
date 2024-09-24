let input = require("fs").readFileSync("1094", "utf8");
let lines = input.split("\n");

const qntDeTestes = Number(lines.shift());

let coelhos = 0;
let ratos = 0;
let sapos = 0;
let totalAnimais = 0;

let percentualCoelho = 0;
let percentualRato = 0;
let percentualSapo = 0;

const percentual = (animal) => (animal * 100) / totalAnimais;

for (let i = 0; i < qntDeTestes; i++) {
  let [qnt, animal] = lines[i].split(" ");
  qnt = Number(qnt);
  totalAnimais += qnt;

  if (animal.includes("C")) {
    coelhos += qnt;
  } else if (animal.includes("R")) {
    ratos += qnt;
  } else {
    sapos += qnt;
  }
}

percentualCoelho = percentual(coelhos);
percentualRato = percentual(ratos);
percentualSapo = percentual(sapos);

console.log(`Total: ${totalAnimais} cobaias`);
console.log(`Total de coelhos: ${coelhos}`);
console.log(`Total de ratos: ${ratos}`);
console.log(`Total de sapos: ${sapos}`);
console.log(`Percentual de coelhos: ${percentualCoelho.toFixed(2)} %`);
console.log(`Percentual de ratos: ${percentualRato.toFixed(2)} %`);
console.log(`Percentual de sapos: ${percentualSapo.toFixed(2)} %`);
