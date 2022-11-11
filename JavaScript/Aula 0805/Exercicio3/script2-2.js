/* 2-2 - Faça um programa que recebe três números do usuário, e identifica o maior através de uma função e o menor número através de outra função.
 */

var max = () => Math.max(num1 , num2 , num3),
  num1 = parseInt(prompt("Digite um numero")),
  num2 = parseInt(prompt("Digite um numero"));
num3 = parseInt(prompt("Digite um numero"));

var menor = (num1, num2, num3) => Math.min(num1, num2, num3);

document.write("Maior: " + max() + "<br>");
document.write("Menor " + menor(num1, num2, num3));