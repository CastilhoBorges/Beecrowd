let input = require("fs").readFileSync("1115", "utf8");
let lines = input.split("\n");

for (const i of lines) {
  const [x, y] = i.split(" ").map(Number);

  if (x > 0 && y > 0) {
    console.log("primeiro");
  } else if (x < 0 && y > 0) {
    console.log("segundo");
  } else if (x < 0 && y < 0) {
    console.log("terceiro");
  } else if (x > 0 && y < 0) {
    console.log("quarto");
  } else {
    break;
  }
}

// Para ser do primeiro quadrante o x e o y devem ser positivos
// Para ser do segundo quadrante o x deve ser negativo e o y positivo
// Do terceiro x e y negativos
// e do quarto o x deve ser postivo e o y negativo
