let input = require("fs").readFileSync("1052", "utf8");
let lines = input.split("\n");

const mouth = function (mes) {
  const mesInNumber = Number(mes);
  const mouths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  console.log(mouths[mesInNumber - 1]);
};

mouth(lines[0]);
