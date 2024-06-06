const valoresT = [6, 5, 7, 8]

var a = valoresT.shift()
var b = valoresT.shift()
var c = valoresT.shift()
var d = valoresT.shift()

if ((b > c && d > a) && ((c + d) > (a + b)) && ((c > 0) && (d > 0)) && ((a % 2) === 0)) {
    console.log('Valores aceitos')
} else {
    console.log('Valores não aceitos')
}