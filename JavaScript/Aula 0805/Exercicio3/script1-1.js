/* 1 - Crie uma função que verifica se o numero digitado pelo usuário é múltiplo de 5; */

/* var idade = () => x=parseInt(prompt("Digite um numero")) % 5 == 0;
 */
var idade = () => y % 5 == 0,
  y = parseInt(prompt("Digite um numero"));

if (idade() == true) {
    document.write("Numero "+y+" multiplo de 5 ");
} else {
    document.write("Numero " + y + " não multiplo de 5 ");
}

