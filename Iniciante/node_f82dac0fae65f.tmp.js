let input = require("fs").readFileSync("1118", "utf8");
let lines = input.split("\n");

const arr = lines.map(Number);

const verificarNotas = function (notas) {
  const notes = [];

  for (let i = 0; notes.length < 3; i++) {
    for (const i of notas) {
      if (i < 0 || i > 10) {
        console.log("nota invalida");
      } else {
        notes.push();
      }
    }
  }

  console.log(`media = ${(notes[0] + notes[1]) / 2}`);
};

verificarNotas(arr);
