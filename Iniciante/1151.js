let input = require("fs").readFileSync("1151", "utf8");
let lines = input.split(" ").map(Number);

const fibonacci = (n) => {
  const sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  console.log(sequence.join(' '));
};

fibonacci(lines[0]);
