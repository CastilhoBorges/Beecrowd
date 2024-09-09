let input = require("fs").readFileSync("1050", "utf8");
let lines = input.split("\n");

const ddds = {
  61: "Brasilia",
  71: "Salvador",
  11: "Sao Paulo",
  21: "Rio de Janeiro",
  32: "Juiz de Fora",
  19: "Campinas",
  27: "Vitoria",
  31: "Belo Horizonte",
};

const city = ddds[lines[0]] ? ddds[lines[0]] : "DDD nao cadastrado";
console.log(city);

