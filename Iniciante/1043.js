let [a, b, c] = [1, 2, 3]
let areaTrapezio;
let perimetroTriangulo; 

if (a + b > c && a + c > b && b + c > a) {
    perimetroTriangulo = a + b + c;
    console.log(`Perimetro = ${perimetroTriangulo}`)
} else {
    areaTrapezio = ((a + b) * c) / 2
    console.log(`Area = ${areaTrapezio}`)
};



