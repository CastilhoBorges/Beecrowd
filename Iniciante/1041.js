let valores = [-9, 0]

let x = valores.shift()
let y = valores.shift()

if (x > 0 && y > 0) {
    console.log('q1')
} else if (x < 0 && y > 0) {
    console.log('q2')
} else if (x < 0 && y < 0) {
    console.log('q3')
} else if (x > 0 && y <0){
    console.log('q4')
} else if (x === 0 && y === 0) {
    console.log('Origem')
} else if (x === 0 && (y > 0 || y < 0)) {
    console.log('Eixo Y')
} else {
    console.log('Eixo X')
}