// 4 - Crie uma função que receba dois números e informe qual o maior entre eles


var comparacao = () => num1>num2 ,num1 = parseInt(prompt("Digite um numero")), num2 = parseInt(prompt("Digite um numero"));

if (comparacao() == true) {
  document.write(" " + num1 + " > "+num2);
} else {
  document.write(" " + num2 + " > " + num1);
}