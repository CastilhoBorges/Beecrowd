const valorDef = [4.0] //lines[0]
const denariosDisp = [100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05, 0.01];

const quantidadeDenarios = (valor, denarios) => Math.trunc(valor / denarios);
const sobraDenario = (valor, denarios) => (valor % denarios).toFixed(2);

function quantidadesDenarios(valor, denarios) {
    const listaDenarios = denarios.map( denario => {
        const quantidade = quantidadeDenarios(valor, denario);
        valor = sobraDenario(valor, denario)      
        return{
            denario: denario,
            quantidade: quantidade
        };
    })

    return listaDenarios
}

function exibirResultado() {
    const denarios = quantidadesDenarios(valorDef, denariosDisp)
    const notas = denarios.slice(0, 6);
    const moedas = denarios.slice(6, 12)

    console.log('NOTAS:')
    notas.forEach(nota => console.log(`${nota.quantidade} nota(s) de R$ ${nota.denario.toFixed(2)}`))

    console.log('MOEDAS:')
    moedas.forEach(moeda => console.log(`${moeda.quantidade} moeda(s) de R$ ${moeda.denario.toFixed(2)}`))
}

exibirResultado()