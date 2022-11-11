var numeros = [];

for (var i = 0; i < 4; i++) {
  numeros.push(parseInt(prompt("Digite o numero: ")));
}

console.log(numeros.filter((elemento) => elemento <3));

document.write("<br>",numeros)