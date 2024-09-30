let input = require("fs").readFileSync("1118", "utf8");
let lines = input.split("\n");

const inputs = lines.filter((i) => !i.includes(".")).map(Number);
const notas = lines.filter((i) => i.includes(".")).map(Number);

const validarNota = function (arrNotas) {
  const notes = [];

  for (let count = 0; count <= arrNotas.length; count++) {
    if (arrNotas[count] < 0 || arrNotas[count] > 10) {
      console.log("nota invalida");
      arrNotas.shift();
    } else {
      for (let i = count; notes.length < 3; ) {
        notes.push(arrNotas[count]);
        arrNotas.splice(i, 1);
      }
    }
  }

  console.log(`media = ${(notes[0] + notes[1]) / 2}`);
};

for (const i of inputs) {
  validarNota(notas);
}

const a = [1, 2, 3, 5];
const b = a.splice(2, 1);
console.log(b);
