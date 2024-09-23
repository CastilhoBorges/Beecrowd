let input = require("fs").readFileSync("1094", "utf8");
let lines = input.split("\n");

const qntDeTestes = Number(lines.shift());

const animais = [];
let quantidade = [];

let totalAnimais = 0;
let coelhos = 0;
let ratos = 0;
let sapos = 0;
let percentualCoelho = 0;
let percentualRato = 0;
let percentualSapo = 0;

for (let i = 0; i < qntDeTestes; i++) {
  const [qnt, animal] = lines[i].split(" ");
  quantidade.push(qnt);
  animais.push(animal);
}

console.log(animais.join('').split(''));

totalAnimais = quantidade.map(Number).reduce((acc, i) => acc + i, 0);

percentualCoelho = (coelhos * 100) / totalAnimais;
percentualRato = (ratos * 100) / totalAnimais;
percentualSapo = (sapos * 100) / totalAnimais;
/*
console.log(`Total: ${totalAnimais} cobaias`);
console.log(`Total de coelhos: ${coelhos}`);
console.log(`Total de ratos: ${ratos}`);
console.log(`Total de sapos: ${sapos}`);
console.log(`Percentual de coelhos: ${percentualCoelho} %`);
console.log(`Percentual de ratos: ${percentualRato} %`);
console.log(`Percentual de sapos: ${percentualSapo} %`);
*/