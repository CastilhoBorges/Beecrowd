let input = require("fs").readFileSync("1146", "utf8");
let lines = input.split("\n").map(Number);

let inputs = lines.shift();

while (inputs !== 0) {
  let str = ``;
  for (let i = 1; i <= inputs; i++) {
    str += `${i} `;
  }
  console.log(str.trim());
  str = ``;
  inputs = lines.shift();
}
