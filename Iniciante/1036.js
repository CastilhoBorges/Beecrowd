let valores = [parseFloat(10.3), parseFloat(3.0), parseFloat(5.0)];

let a = valores.shift(), b = valores.shift(), c = valores.shift();

let delta = b ** 2 - 4 * a * c;

if (delta < 0 || a == 0) {
    return 'Impossivel calcular'
}

const x1 = (-b + Math.sqrt(delta)) / (2 * a)
const x2 = (-b - Math.sqrt(delta)) / (2 * a)

return `R1 = ${x1.toFixed(5)}\nR2 = ${x2.toFixed(5)}`