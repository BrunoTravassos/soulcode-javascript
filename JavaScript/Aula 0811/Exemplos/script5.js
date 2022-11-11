var numeros = [10, 15, 25, 3, 12, 101, 99];

var verifica = numeros.every((elementos) => elementos < 100);
//equivale ao &
console.log(verifica);
//retorno false


var numeros = [10, 15, 25, 3, 12, 101, 99];

var verifica = numeros.some((elementos) => elementos < 100);
//equivale ao ||
console.log(verifica);
//retorno true