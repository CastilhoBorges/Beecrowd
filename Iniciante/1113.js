let input = require("fs").readFileSync("1113", "utf8");
let lines = input.split("\n");

for (const i of lines) {
  const [v1, v2] = i.split(" ").map(Number);
  if (v1 !== v2) {
    if (v1 > v2) {
      console.log("Decrescente");
    } else {
      console.log("Crescente");
    }
  } else {
    break;
  }
}
