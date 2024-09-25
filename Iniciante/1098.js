for (
  let i = 0, j1 = 1, j2 = 2, j3 = 3;
  i <= 2;
  i += 0.2, j1 += 0.2, j2 += 0.2, j3 += 0.2
) {
  if (i === 0 || i === 1 || i >= 1.9) {
    console.log(`I=${Math.round(i)} J=${Math.round(j1)}`);
    console.log(`I=${Math.round(i)} J=${Math.round(j2)}`);
    console.log(`I=${Math.round(i)} J=${Math.round(j3)}`);
  } else {
    console.log(`I=${i.toFixed(1)} J=${j1.toFixed(1)}`);
    console.log(`I=${i.toFixed(1)} J=${j2.toFixed(1)}`);
    console.log(`I=${i.toFixed(1)} J=${j3.toFixed(1)}`);
  }
}
