// 1. Faça um script que leia 4 números e mostre-os em ordem crescente e depois em ordem decrescente.

var num1, num2, num3, num4, aux;

num1 = parseInt(prompt("Digite o Primeiro Numero"));
num2 = parseInt(prompt("Digite o Segundo Numero"));
num3 = parseInt(prompt("Digite o Terceiro Numero"));
num4 = parseInt(prompt("Digite o Quarto Numero"));

document.write(" " + num1 + " / ");
document.write(" " + num2 + " / ");
document.write(" " + num3 + " / ");
document.write(" " + num4 + " / ");
document.write(" <br>  ");

if (num2 < num1) {
  aux = num1;
  num1 = num2;
  num2 = aux;
}

if (num3 < num1) {
  aux = num1;
  num1 = num3;
  num3 = aux;
}
if (num3 < num2) {
  aux = num2;
  num2 = num3;
  num3 = aux;
}

if (num4 < num1) {
  aux = num1;
  num1 = num4;
  num4 = aux;
}
if (num4 < num2) {
  aux = num2;
  num2 = num4;
  num4 = aux;
}
if (num4 < num3) {
  aux = num3;
  num3 = num4;
  num4 = aux;
}

document.write(
  "Crescente: " +
    num1 +
    " / " +
    num2 +
    " / " +
    num3 +
    " / " +
    num4 +
    " / " +
    "<br>"
);
document.write(
  "Decrescente: " + num4 + " / " + num3 + " / " + num2 + " / " + num1 + " / "
);
