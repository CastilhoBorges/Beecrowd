let input = require("fs").readFileSync("1117", "utf8");
let lines = input.split("\n");

const arr = lines.map(Number);
const notes = [];

for (let i = 0; i <= arr.length; i++) {
  if (arr[i] < 0 || arr[i] > 10) {
    console.log("nota invalida");
  } else {
    notes.push(arr[i]);
  }
}

console.log(`media = ${(notes[0] + notes[1]) / 2}`);
