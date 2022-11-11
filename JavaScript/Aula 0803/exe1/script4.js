// peso / altura ^ 2

var imc = 0;
//var peso = 80;
var peso = 0;
//var altura = 1.86;
var altura = 0;

peso = parseFloat(prompt("Peso"));
altura = parseFloat(prompt("altura"));
imc = peso / (altura * altura);

document.write(imc);


if (imc >= 40) {
  console.log("imc = " + parseInt(imc) + " Obesidade gra 3");
} else if (imc >= 35) {
  console.log("imc = " + parseInt(imc) + " obesidade grau 2");
} else if (imc >= 30) {
  console.log("imc = " + parseInt(imc) + " obesidade grau 1");
} else if (imc >= 25) {
  console.log("imc = " + parseInt(imc) + " sobrepeso");
} else if (imc >= 18.5) {
  console.log("imc = " + parseInt(imc) + " peso normal");
} else {
  console.log("imc = " + parseInt(imc) + " abaixo do peso");
}
