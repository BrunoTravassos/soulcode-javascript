/* 3.O cardápio de uma lancheria é o seguinte:

Especificação Código Preço
Cachorro quente 100 1.20
Bauru simples 101 1.30
Bauru com ovo 102 1.50
Hambúrger 103 1.20
Cheeseburguer 104 1.30
Refrigerante 105 1.00


Implemente um programa que leia o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. */

var codigo = parseInt(prompt("digite o codigo do item : "));
var quantidade_item = parseInt(prompt("digite o quantidade do item : "));

switch (codigo) {
  case 100:
    document.write("Cachorro Quente " + "<br>");
    document.write("Valor total: " + (quantidade_item * 1.2));
    break;
  case 101:
    document.write("Bauru Simples " + "<br>");
    document.write("Valor total: " + (quantidade_item * 1.3));
    break;
  case 102:
        document.write("Bauru com ovo " + "<br>" );
    document.write("Valor total: " + (quantidade_item * 1.5));
    break;
  case 103:
    document.write("hamburguer " +"<br>");
    document.write("Valor total: " + (quantidade_item * 1.2));
    break;
  case 104:
    document.write("Cheeseburguer " +"<br>");
    document.write("Valor total: " + (quantidade_item * 1.3));
    break;
  case 105:
        document.write("Refrigerante " + "<br>");
        document.write("Valor total: "+(quantidade_item * 1.00));
    break;

  default:
    document.write("Codigo não encontrado");
    break;
}