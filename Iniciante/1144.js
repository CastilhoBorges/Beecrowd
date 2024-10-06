let input = require("fs").readFileSync("1144", "utf8");
let lines = input.split("\n").map(Number);

for (
  let count = 1,
    l1 = 1,
    l2a = 1,
    l2b = 2,
    l3a = 1,
    l3b = 2,
    linha2count = 3,
    linha3count = 7,
    mudarCount3 = 12;
  count <= lines[0];
  count++,
    l1++,
    l2a += linha2count,
    l2b += linha2count,
    l3a += linha3count,
    l3b += linha3count,
    linha2count += 2,
    linha3count += mudarCount3,
    mudarCount3 += 6
) {
  console.log(`${l1} ${l2a} ${l3a}`);
  console.log(`${l1} ${l2b} ${l3b}`);
}
