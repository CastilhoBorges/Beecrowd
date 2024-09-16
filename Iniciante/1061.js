let input = require("fs").readFileSync("1061", "utf8");
let lines = input.split("\n");

const [dI, hI, dF, hF] = lines;

const getNumberStr = (arg) => Number(arg.slice(4));
const getHourStr = (hour) => hour.replaceAll(":", "").split("  ").map(Number);

const diaInicio = getNumberStr(dI);
const [horaInicio, minutoInicio, segundoInicio] = getHourStr(hI);
const diaFinal = getNumberStr(dF);
const [horaFinal, minutoFinal, segundoFinal] = getHourStr(hF);

const inicio =
  diaInicio * (60 * 24) +
  horaInicio * 60 +
  (minutoInicio % 60) +
  segundoInicio / 60;


console.log(inicio);