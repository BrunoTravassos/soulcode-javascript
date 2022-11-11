/* 3.Crie uma função que pede ao usuário para digitar um valor e calcular 5% de desconto
retornando o valor do desconto. */

function calcula_desconto(num1, num2) {
  return (desconto = num1*0.05 );
}
num1 = parseInt(prompt("Digite o Numero"));

var resultado = calcula_desconto(num1);

document.write("5% de desconto de : "+num1 +" é:  "+ resultado);