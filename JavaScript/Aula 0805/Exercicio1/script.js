/* 1.Crie uma função que exibe a palavra (ímpar/par) de acordo com o numero digitado pelo usuário.
 */

function verifica(num1) {
  if (num1 % 2 == 0) {
    //   console.log("o numero " + teste + " é par");
    document.write("o numero " + num1 + " é par");
  } else {
    //   console.log("o numero " + teste + " é impar");
    document.write("o numero " + num1 + " é impar");
  }
}
num1 = parseInt(prompt("Digite o Numero"));

verifica(num1);


3
2