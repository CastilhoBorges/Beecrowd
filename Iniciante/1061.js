let input = require("fs").readFileSync("1061", "utf8");
let lines = input.split("\n");

const [dI, hI, dF, hF] = lines;

const getNumberStr = (arg) => Number(arg.slice(4));
const getHourStr = (hour) => hour.replaceAll(":", "").split("  ").map(Number);

const diaInicio = getNumberStr(dI);
const horaInicio = getHourStr(hI);
const diaFinal = getNumberStr(dF);
const horaFinal = getHourStr(hF);

