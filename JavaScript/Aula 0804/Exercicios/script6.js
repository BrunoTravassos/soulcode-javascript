/* 6 - Escreva um algoritmo que peça para o usuário digitar um valor e imprima a sequência de valores do cálculo de A! e o seu resultado. Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120 */

var valor = parseInt(prompt("digite um valor: "));
var resultado = valor;
var aux = valor - 1;
document.write(valor);
for (var i = aux; i >= 1; i--) {
  resultado *= i;
  document.write(" x " + i);
}

document.write(" = " + resultado + "<br>");
