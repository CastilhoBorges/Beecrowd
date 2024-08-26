let input = require("fs").readFileSync("1049", "utf8");
let lines = input.split("\n");

const animals = {
  vertebrado: {
    ave: {
      carnivoro: "aguia",
      ornivoro: "pomba",
    },
    mamifero: {
      ornivoro: "homem",
      herbivoro: "vaca",
    },
  },
  invertebrado: {
    inseto: {
      hematofago: "pulga",
      herbivoro: "lagarta",
    },
    anelideo: {
      hematofago: "sanguessuga",
      ornivoro: "minhoca",
    },
  },
};

const selectAnimal = function (arr) {}