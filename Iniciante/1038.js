let codigo = [1, 2, 3, 4, 5];
let quantidade = [0, 1 , 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let preco;

if (codigo == 1){
    preco = 4.0
} else if (codigo == 2) {
    preco = 4.5
} else if (codigo == 3) {
    preco = 5.0
} else if (codigo == 4) {
    preco = 2.0
} else {
    preco = 1.5
}

const valorTotal = preco * quantidade;

console.log(`Total: R$ ${valorTotal.toFixed(2)}`);








