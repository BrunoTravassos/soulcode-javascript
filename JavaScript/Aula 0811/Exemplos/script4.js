// verifica se no array tem um valor e sai com true ou false

var numeros = [];

for (var i = 0; i < 4; i++) {
  numeros.push(parseInt(prompt("Digite o numero: ")));
}
var verifica = numeros.find(elemento => elemento === 8);
// retorna o valor
if (verifica) {
    document.write("o 8 existe");
} else {
    document.write("o 8 não exise");
    
}

