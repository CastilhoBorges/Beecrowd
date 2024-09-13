let input = require("fs").readFileSync("1047", "utf8");
let lines = input.split("\n");

const [horaInicio, minutoInicio, horaFinal, minutoFinal] = lines[0]
  .split(" ")
  .map(Number);

const transformator = function (hi, mi, hf, mf) {
  const inicio = hi * 60 + mi;
  const fim = hf * 60 + mf;

  let timeGameInMinutos;

  if (fim > inicio) {
    timeGameInMinutos = fim - inicio;
  } else {
    timeGameInMinutos = 24 * 60 - inicio + fim;
  }

  const duracaoHoras = Math.floor(timeGameInMinutos / 60);
  const duracaoMinutos = Math.floor(timeGameInMinutos % 60);

  console.log(
    `O JOGO DUROU ${duracaoHoras} HORA(S) E ${duracaoMinutos} MINUTO(S)`
  );
};

transformator(horaInicio, minutoInicio, horaFinal, minutoFinal);
