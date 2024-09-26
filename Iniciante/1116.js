let input = require("fs").readFileSync("1116", "utf8");
let lines = input.split("\n");

const qntDeTestes = Number(lines.shift());

for (let i = 0; i < qntDeTestes; i++) {
  const [x, y] = lines[i].split(" ").map(Number);

  if (y !== 0) {
    const divisao = x / y;
    console.log(divisao.toFixed(1));
  } else {
    console.log("divisao impossivel");
  }
}
