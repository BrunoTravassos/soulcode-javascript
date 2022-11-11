var numeros = [];
var triploNumeros = [];


for (var i = 0; i < 4; i++){
    numeros.push(parseInt(prompt("Digite o numero: ")));
}

triploNumeros = numeros.map(elemento => elemento * 3);

console.log(numeros);
console.log(triploNumeros);
