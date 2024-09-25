let input = require("fs").readFileSync("1101", "utf8");
let lines = input.split("\n");

for (let i = 0; i <= lines.length; i++) {
  const [v1, v2] = lines[i].split(" ").map(Number);

  if (v1 <= 0 || v2 <= 0) {
    break;
  } else {
    const arr = lines[i].split(" ").map(Number);
    const maior = Math.max(...arr);
    const menor = Math.min(...arr);

    let count = 0;
    let str = "";

    for (let i = menor; i <= maior; i++) {
      count += i;
      str += i + " ";
    }
    console.log(`${str}Sum=${count}`);
  }
}
