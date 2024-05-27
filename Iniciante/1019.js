const seconds = Number(556)

var horas = Math.floor(seconds / 3600)
var minutos = Math.floor(((seconds - ( horas * 3600))) / 60)
var secondos = Math.floor(seconds % 60)

console.log(`${parseInt(horas)}:${parseInt(minutos)}:${parseInt(secondos)}`)