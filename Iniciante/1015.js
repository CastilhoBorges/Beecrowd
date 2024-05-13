let valoresp1 = [parseFloat(1.0), parseFloat(7.0)];
let valoresp2 = [parseFloat(5.0), parseFloat(9.0)];

let x1 = valoresp1.shift();
let y1 = valoresp1.shift();

let x2 = valoresp2.shift();
let y2 = valoresp2.shift();

let distancia = Math.sqrt(((x2 - x1)**2) + ((y2 - y1)**2))

console.log(`${distancia.toFixed(4)}`)