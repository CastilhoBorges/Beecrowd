let input = require("fs").readFileSync("1114", "utf8");
let lines = input.split("\n");

for (const i of lines) {
  if (i.includes("2002")) {
    console.log("Acesso Permitido");
    break;
  } else {
    console.log("Senha Invalida");
  }
}
