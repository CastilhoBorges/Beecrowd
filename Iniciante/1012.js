var [a, b, c] = [parseFloat(3.0), parseFloat(4.0), parseFloat(5.2)]

var areatriangulo = (a * c) / 2
var areacirculo = 3.14159 * c ** 2
var areatrapezio = (a + b) * c / 2
var areaquadrado = b * b
var arearetangulo = a * b

console.log(`TRIANGULO: ${areatriangulo.toFixed(3)}`)
console.log(`CIRCULO: ${areacirculo.toFixed(3)}`)
console.log(`TRAPEZIO: ${areatrapezio.toFixed(3)}`)
console.log(`QUADRADO: ${areaquadrado.toFixed(3)}`)
console.log(`RETANGULO: ${arearetangulo.toFixed(3)}`)