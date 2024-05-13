let valorestotais1 = [Number(12), Number(1), Number(5.30)]
let valorestotais2 = [Number(16), Number(2), Number(5.10)]

let codpeca1 = valorestotais1.shift()
let num1 = valorestotais1.shift()
let uni1 = valorestotais1.shift()
let valortotal1 = num1 * uni1

let codpeca2 = valorestotais2.shift()
let num2 = valorestotais2.shift()
let uni2 = valorestotais2.shift()
let valortotal2 = num2 * uni2

let pagar = valortotal1 + valortotal2

console.log("VALOR A PAGAR: R$" + pagar.toFixed(2))

