let input = require("fs").readFileSync("1059", "utf8");
let lines = input.split("\n");

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
  else continue;
}
