var notas = [];
var x = parseInt(prompt("Digite o numero de alunos?"));
var resultado = 0;

var media = (numero) => numero/x ;

for (i = 0; i < x; i++) {
  notas[i] = parseFloat(prompt("Digite a nota:"));
}

document.write("notas = [" + notas + "]" + "<br>");

for (i in notas) {
    resultado += parseFloat(notas[i]);
    document.write(notas[i]+"<br>");
}
document.write("Media da turma: "+media(resultado));
/* 
var soma = (y, x) => y + x;
resultado= notas.reduce(soma);
document.write(resultado); */