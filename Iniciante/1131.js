let input = require("fs").readFileSync("1131", "utf8");
let lines = input.split("\n");

let inputs = 1;

let grenais = 0;
let winInter = 0;
let winGremio = 0;
let empate = 0;
let maiorVencedor;

while (inputs !== 2) {
  const result = lines.shift();
  const [inter, gremio] = result.split(" ").map(Number);
  if (inter === gremio) {
    empate++;
    grenais++;
  } else if (inter > gremio) {
    winInter++;
    grenais++;
  } else {
    winGremio++;
    grenais++;
  }
  console.log("Novo grenal (1-sim 2-nao)");
  inputs = Number(lines.shift());
}

maiorVencedor = winInter > winGremio ? "Inter" : "Gremio";

console.log(
  `${grenais} grenais\nInter:${winInter}\nGremio:${winGremio}\nEmpates:${empate}\n${maiorVencedor} venceu mais`
);
