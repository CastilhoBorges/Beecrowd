const valorTotal = [23147]
const notas = [100, 50, 20, 10, 5, 2, 1]

function quantidadeNotas(valor, notas){
    const quantidade = Math.floor(valor / notas)
    return quantidade
}

function quantidadesPorNota(valor, notas){
    const listaNotas = notas.map(nota => {
        const quantidade = quantidadeNotas(valor, nota)
        valor = valor - (quantidade * nota)
        return {nota, quantidade}
    })
    return listaNotas
}

function mostrarNotas(valor, notas) {
    const notasNecessarias = quantidadesPorNota(valor, notas)

    console.log(valor)

    notasNecessarias.forEach( ({quantidade, nota}) => {
        console.log(`${quantidade} nota(s) de R$ ${nota},00`)
    });
}

(mostrarNotas(valorTotal, notas))