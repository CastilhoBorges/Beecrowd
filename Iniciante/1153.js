let input = require("fs").readFileSync("1153", "utf8");
let lines = input.split("\n").map(Number);

// Solução para numeros menores
const fatorial = (n) => {
  let fatorAtual = n - 1;
  let op = n;
  while (fatorAtual > 0) {
    op = op * fatorAtual;
    fatorAtual--;
  }
  console.log(op);
};

fatorial(10);

// Solução para valores maiores
const fatorialBigInt = (n) => {
  let result = BigInt(1);
  for (let i = BigInt(2); i <= n; i++) {
    result *= i;
  }

  console.log(result.toString());
};

fatorialBigInt(30);
