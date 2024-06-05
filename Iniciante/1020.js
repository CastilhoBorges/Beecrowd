var tdias = 90

var ano = parseInt(tdias / 365)
var mes = parseInt((tdias % 365) / 30)
var dia = parseInt((tdias % 365) % 30) 

console.log(`${ano} ano(s)`)
console.log(`${mes} mes(es)`)
console.log(`${dia} dia(s)`)