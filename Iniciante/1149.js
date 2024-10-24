let input = require("fs").readFileSync("1149", "utf8");
let lines = input.split(" ").map(Number);

let a = lines.shift();
let n = lines.shift();

const funcRecurs = (value) => {
  if (n <= 0) {
    n = lines.shift();
    funcRecurs(n);
  } else {
    let sum = 0;
    for (let i = 0; i <= n - 1; i++) {
      sum += a + i;
    }

    console.log(sum);
  }
};

funcRecurs(n);
