let input = require("fs").readFileSync("1060", "utf8");
let lines = input.split("\n");

const arr = lines.map(Number);

const positive = (array) =>
  console.log(`${array.filter((i) => i > 0).length} valores positivos`);

positive(arr);
