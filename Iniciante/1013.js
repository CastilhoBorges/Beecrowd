let valores = [1 , 2, 3];

let maior = (a, b) => (a + b + Math.abs(a - b)) / 2;

let maiorABC = valores.reduce(maior);

console.log(`${maiorABC} eh o maior`)