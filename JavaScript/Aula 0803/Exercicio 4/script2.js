/* 2. Também elabore um outro script que realize o IMC
O IMC – Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar
uma indicação sobre a condição de peso de uma pessoa adulta.
A fórmula é IMC = peso / ( altura )2

Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo
com a tabela abaixo.

IMC em adultos Condição
Abaixo de 18,5 Abaixo do peso
Entre 18,5 e 25 Peso normal
Acima de  25 e 30 Acima do peso
Acima de 30 obeso */

var imc = 0;
//var peso = 80;
var peso = 0;
//var altura = 1.86;
var altura = 0;

peso = parseFloat(prompt("Peso"));
altura = parseFloat(prompt("altura"));
imc = peso / (altura * altura);

document.write(imc);

if (imc > 30) {
  console.log("imc = " + parseInt(imc) + " obesidade grau 1");
} else if (imc > 25 && imc <= 30) {
  console.log("imc = " + parseInt(imc) + " sobrepeso");
} else if (imc > 18.5 && imc <= 25) {
  console.log("imc = " + parseInt(imc) + " peso normal");
} else {
  console.log("imc = " + parseInt(imc) + " abaixo do peso");
}
