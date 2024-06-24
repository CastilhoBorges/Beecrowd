let input = require('fs').readFileSync('1044', 'utf8');
let lines = input.split('\n');

let [A, B] = lines[0].split(' ').map(Number);

if (A % B === 0 || B % A === 0) {
    console.log(`Sao Multiplos`);
} else {
    console.log(`Nao sao Multiplos`);
}

