let input = require("fs").readFileSync("1061", "utf8");
let lines = input.split("\n");

const [dI, hI, dF, hF] = lines;

const getNumberStr = (arg) => Number(arg.slice(4));
const getHourStr = (hour) => hour.replace(":", "").replace(":", "").split("  ").map(Number);
const forSeconds = (d, h, m, s) => s + m * 60 + h * 60 * 60 + d * 24 * 60 * 60;
const consoleLogResult = function (value) {
  const dias = Math.floor(value / (24 * 60 * 60));
  const horas = Math.floor((value % (24 * 60 * 60)) / 3600);
  const minutos = Math.floor((value % (60 * 60)) / 60);
  const segundos = Math.floor(value % 60);

  console.log(
    `${dias} dia(s)\n${horas} hora(s)\n${minutos} minuto(s)\n${segundos} segundo(s)`
  );
};

const diaInicio = getNumberStr(dI);
const [horaInicio, minutoInicio, segundoInicio] = getHourStr(hI);
const diaFinal = getNumberStr(dF);
const [horaFinal, minutoFinal, segundoFinal] = getHourStr(hF);

const inicio = forSeconds(diaInicio, horaInicio, minutoInicio, segundoInicio);

const final = forSeconds(diaFinal, horaFinal, minutoFinal, segundoFinal);

const duracaoEvento = final - inicio;

consoleLogResult(duracaoEvento);


