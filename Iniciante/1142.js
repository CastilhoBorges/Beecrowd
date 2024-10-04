let input = require("fs").readFileSync("1142", "utf8");
let lines = input.split("\n").map(Number);

for (
  let count = 1, l1 = 1, l2 = 2, l3 = 3;
  count <= lines[0];
  count++, l1 += 4, l2 += 4, l3 += 4
) {
  console.log(`${l1} ${l2} ${l3} PUM`);
}
