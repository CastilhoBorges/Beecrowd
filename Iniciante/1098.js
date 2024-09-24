for (
  let i = 0, j1 = 1, j2 = 2, j3 = 3;
  i <= 2;
  i += 0.2, j1 += 0.2, j2 += 0.2, j3 += 0.2
) {
  if (i === 0 || i === 1 || i === 2.) {
    console.log(`I=${i} J=${j1}`);
    console.log(`I=${i} J=${j2}`);
    console.log(`I=${i} J=${j3}`);
  } else {
    console.log(`I=${i.toFixed(1)} J=${j1.toFixed(1)}`);
    console.log(`I=${i.toFixed(1)} J=${j2.toFixed(1)}`);
    console.log(`I=${i.toFixed(1)} J=${j3.toFixed(1)}`);
  }
}
