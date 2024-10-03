let input = require("fs").readFileSync("1118", "utf8");
let lines = input.split("\n");

const arr = lines.map(Number);

let inputs = 1;
let nmr = 0;
let media = 0;
let verificar;

while (inputs !== 2) {
  if (inputs === 1) {
    while (nmr < 2) {
      verificar = arr.shift();
      if (verificar < 0 || verificar > 10) {
        console.log("nota invalida");
      } else {
        media += verificar;
        nmr++;
      }
    }

    console.log(`media = ${(media / 2).toFixed(2)}`);
    console.log(`novo calculo (1-sim 2-nao)`);
    inputs = arr.shift();
  } else {
    console.log(`novo calculo (1-sim 2-nao)`);
    inputs = arr.shift();
  }

  media = 0;
  nmr = 0;
}
