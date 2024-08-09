let input = require("fs").readFileSync("1046", "utf8");
let lines = input.split("\n");

const [start, end] = lines[0].split(" ").map(Number);

let duracao;
if (end > start) {
  duracao = end - start;
} else {
  duracao = 24 - start + end;
}

console.log(`O JOGO DUROU ${duracao} HORA(S)`);
