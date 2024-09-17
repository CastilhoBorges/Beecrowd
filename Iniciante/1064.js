let input = require("fs").readFileSync("1064", "utf8");
let lines = input.split("\n");

const arrPositive = lines.map(Number).filter((a) => a > 0);
const average = arrPositive.reduce((acc, i) => acc + i, 0) / arrPositive.length;

console.log(`${arrPositive.length} valores positivos\n${average.toFixed(1)}`);
