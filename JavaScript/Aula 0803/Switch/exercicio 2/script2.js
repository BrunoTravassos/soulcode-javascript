/* 2.Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A. 10%
B. 15%
C. 20%
Faça um programa que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. */

var salario = parseFloat(prompt("digite o salario: "));
var opcao = (prompt("digite a opção de aumento", "(a/b/c)"));

switch (opcao) {
    case "a":
    document.write("Salário atual: "+ salario +"<br>");
    document.write("Salário novo: "+ parseFloat(salario*1.1));
    break;
  case "b":
    document.write("Salário atual: " + salario + "<br>");
    document.write("Salário novo: " + parseFloat(salario * 1.15));
    break;
  case "c":
    document.write("Salário atual: " + salario + "<br>");
    document.write("Salário novo: " + parseFloat(salario * 1.2));
    break;
    default:
    document.write("Erro");
    break;
}