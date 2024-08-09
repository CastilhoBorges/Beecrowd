let input = require("fs").readFileSync("1048", "utf8");
let lines = input.split("\n");

const salario = Number(lines[0]);
let ganho;

if (salario >= 0 && salario < 400.01) {
  ganho = salario * 0.15;
  console.log(
    `Novo salario: ${(salario + ganho).toFixed(
      2
    )}\nReajuste ganho: ${ganho.toFixed(2)}\nEm percentual: 15 %`
  );
} else if (salario > 400 && salario < 800.01) {
  ganho = salario * 0.12;
  console.log(
    `Novo salario: ${(salario + ganho).toFixed(
      2
    )}\nReajuste ganho: ${ganho.toFixed(2)}\nEm percentual: 12 %`
  );
} else if (salario > 800 && salario < 1200.01) {
  ganho = salario * 0.1;
  console.log(
    `Novo salario: ${(salario + ganho).toFixed(
      2
    )}\nReajuste ganho: ${ganho.toFixed(2)}\nEm percentual: 10 %`
  );
} else if (salario > 1200 && salario < 2000.01) {
  ganho = salario * 0.07;
  console.log(
    `Novo salario: ${(salario + ganho).toFixed(
      2
    )}\nReajuste ganho: ${ganho.toFixed(2)}\nEm percentual: 7 %`
  );
} else {
  ganho = salario * 0.04;
  console.log(
    `Novo salario: ${(salario + ganho).toFixed(
      2
    )}\nReajuste ganho: ${ganho.toFixed(2)}\nEm percentual: 4 %`
  );
}
