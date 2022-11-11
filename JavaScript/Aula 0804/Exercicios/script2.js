/* 2 - Desenvolver um algoritmo onde o usuário determina quantidade de valores que será solicitado ao usuário. Calcule e escreva a
média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores negativos.
 */

var quantidade_valores = 0;
var positivo = 0;
var negativo = 0;
var resultado_media = 0;
var soma = 0;
var val = 0;

quantidade_valores = parseInt(prompt("digite quantidade de numeros: "));

for (i = 0; i < quantidade_valores; i++) {
  val = parseInt(prompt("Digite o valor: "));
  soma = soma + val;

  if (val > 0) {
    positivo++;
  } else {
    negativo++;
  }
}

resultado_media = soma / quantidade_valores;

document.write("Media do numeros: " + resultado_media + "<br>");
document.write("Soma Positivos: " + positivo + "<br>");
document.write("Soma Negativos: " + negativo + "<br>");
