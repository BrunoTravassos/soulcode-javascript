/* 2.Crie uma função que recebe 2 parâmetros(numéricos) e retorna a divisão deles e mostra na tela. */

function divisao(num1, num2) {
  return (divisao = num1 / num2);
}
num1 = parseInt(prompt("Digite o Numero"));
num2 = parseInt(prompt("Digite o Segundo Numero"));

var resultado = divisao(num1, num2);

document.write("O Resultado da divisão: "+resultado)