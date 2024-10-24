let input = require("fs").readFileSync("1150", "utf8");
let lines = input.split("\n").map(Number);

const ultraZ = (x, z) => {
  if (z <= x) {
    ultraZ(x, lines.shift());
  } else {
    let count = 0;
    let sum = x + 1;
    let total = x;
    while (total < z) {
      total = total + sum;
      count++;
    }
    console.log(count);
  }
};

ultraZ(lines.shift(), lines.shift());
