let input = require("fs").readFileSync("1079", "utf8");
let lines = input.split("\n");

const inicial = Number(lines.shift());

for (let i = 0; i < inicial; i++) {
  const [v1, v2, v3] = lines[i].split(" ").map(Number);
  const media = (v1 * 2 + v2 * 3 + v3 * 5) / 10;
  console.log(media.toFixed(1));
}
