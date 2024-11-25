//let input = require("fs").readFileSync("1158", "utf8");
let lines = ["2", "4 3", "11 2"];

const qntTeste = Number(lines.shift());

for (let i = 0; i < qntTeste; i++) {
  let [x, y] = lines[i].split(" ").map(Number);

  let count = 0;
  let sum = 0;

  while (count <= y) {
    if (x % 2 !== 0) {
      sum += x;
    }

    count++;
    x++;
  }

  console.log(sum);
}
