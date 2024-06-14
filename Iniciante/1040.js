
const notas = lines[0]
const pesos = [2, 3, 4, 1]


const nota1 = notas.shift()
const nota2 = notas.shift()
const nota3 = notas.shift()
const nota4 = notas.shift()

const peso1 = pesos.shift()
const peso2 = pesos.shift()
const peso3 = pesos.shift()
const peso4 = pesos.shift()

const media = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) + (nota4 * peso4)) / (peso1 + peso2 + peso3 + peso4)


if (media >= 7.0){
    console.log(`Media: ${media.toFixed(1)}`)
    console.log('Aluno aprovado')
} else if (media < 5.0) {
    console.log(`Media: ${media.toFixed(1)}`)
    console.log('Aluno reprovado')
} else if (media >= 5.0 && media <= 6.9) {
    const notaExame = 6.4

    const novaMedia = (notaExame + media) / 2
    
    if (novaMedia >= 5.0) {
        console.log(`Media: ${media.toFixed(1)}`)
        console.log('Aluno em exame.')
        console.log(`Nota do exame: ${notaExame.toFixed(1)}`)
        console.log('Aluno aprovado.')
        console.log(`Media final: ${novaMedia.toFixed(1)}`)
    } else {
        console.log(`Media: ${media.toFixed(1)}`)
        console.log('Aluno em exame.')
        console.log(`Nota do exame: ${notaExame.toFixed(1)}`)
        console.log('Aluno reprovado.')
        console.log(`Media final: ${novaMedia.toFixed(1)}`)
    }
}





