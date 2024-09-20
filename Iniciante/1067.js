"use strict";

let input = require("fs").readFileSync("1067", "utf8");
let lines = input.split("\n");

const number = Number(lines[0]);

for (let i = 1; i <= number; i++) {
  if (i % 2 === 1) console.log(i);
}
