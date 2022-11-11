/* 1 - Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
mostrar :
a. A menor altura do grupo; 
b. A maior altura do grupo;  */

var maior = 0,
  menor = 0,
  altura = 0,
  i = 0;
do {
  altura = prompt("digite uma altura: ");
  document.write("altura: " + altura + "<br>");
  if (i == 0) {
    maior = altura;
    menor = altura;
    i++;
  } else if (altura > maior) {
    maior = altura;
  } else if (altura < menor) {
    menor = altura;
  }
  i++;
} while (i <= 5);
document.write("Menor altura: " + menor + "<br>");
document.write("Maior altura: " + maior);
