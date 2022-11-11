// peso / altura ^ 2
// obeso grau 1 >= 30

var imc = 0;

var peso = 103;
var altura = 1.86;
imc = peso / (altura * altura);
console.log("imc = " + imc);
console.log(imc >= 30
    ? "gordo"
    : "nao gordo");

