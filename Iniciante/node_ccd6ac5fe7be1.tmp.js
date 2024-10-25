let input = require("fs").readFileSync("1151", "utf8");
let lines = input.split("").map(Number);

const fibonacci = function (n) {
  let value1 = 0;
  let value2 = 1;
  let valueFinal = value1 + value2;
  if (n === 1) {
    console.log(`${value1} ${value2}`);
  } else {
    let str = `${value1} ${value2} `;
    while (valueFinal < n) {
        str += `${valueFinal}`
        value1++
        value2++
    }

    console.log(str);
  }
};

fibonacci(lines[0])
