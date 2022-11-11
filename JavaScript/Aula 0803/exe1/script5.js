//COMANDO IF

//1) Faça um script que mostre na tela se um número é positivo, negativo ou nulo (zero);

/* var numero = 0;

numero = parseInt(prompt("Digite um Número"));
if (numero > 0) {
    document.write("Numero "+numero+" é positivo");
}
if (numero < 0) {
    document.write("Numero "+numero+" é negativo");
}
if (numero == 0) {
    document.write("Numero "+numero+" é nulo");
}
 */
 //2) Faça um script que mostre na tela se um número é par ou ímpar

/* var numero = 0;
var resultado = 0;


numero = parseInt(prompt("Digite um Número"));
resultado = numero % 2;

if (resultado == 0) {
    document.write("Numero "+numero+" é par");
}
if (resultado != 0) {
    document.write("Numero " + numero + " é impar");
} */

/* 3) 11) Elabore um script que calcule o que deve ser pago por um produto, considerando o preço
normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
Código Condição de pagamento

1 À vista no cartão ou cheque, recebe 10% de desconto
2 À vista no dinheiro, recebe 15% de desconto
3 Em duas vezes, preço normal de etiqueta sem juros
4 Em três vezes, preço normal de etiqueta mais juros de 10%  */

var valor = 0;
var opcao = 0;
var resultado = 0;

valor = parseInt(prompt("Digite o valor"));
opcao = parseInt(prompt("Digite a opção de pagamento"));

//resultado = numero % 2;
if (opcao == 1) {
    resultado = (valor - (valor * 0.1));
  document.write("Valor: " + valor + " <br>");
  document.write(
    "Condição de pagamento: " + opcao + " - À vista no cartão ou cheque "+"<br>");
  document.write("Total Pagamento:  " + resultado);
}
if (opcao == 2) {
  resultado = (valor - (valor * 0.15)) ;
  document.write("Valor: " + valor + " <br>");
  document.write(
    "Condição de pagamento: " + opcao + " - À vista no dinheiro " + "<br>"
  );
  document.write("Total Pagamento:  " + resultado);
}

if (opcao == 3) {
  resultado = (valor / 2);
  document.write("Valor: " + valor + " <br>");
  document.write(
    "Condição de pagamento: " +
      opcao +
      " - Em duas vezes, preço normal de etiqueta sem juros " +
      "<br>"
  );
  document.write("Total Pagamento:  " + resultado +" em 2x");
}

if (opcao == 4) {
  resultado = ((valor/3) +(valor * 0.10));
  document.write("Valor: " + valor + " <br>");
  document.write(
    "Condição de pagamento: " +
      opcao +
      " - Em três vezes, preço normal de etiqueta mais juros de 10% " +
      "<br>"
  );
  document.write("Total Pagamento:  " + resultado + " em 3x com juros de 10%");
}