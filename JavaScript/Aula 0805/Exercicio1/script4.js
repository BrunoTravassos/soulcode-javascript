/* 4.Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade(18 anos acima) ou menor (considere 2021) */

function verifica_idade(ano) {
    resultado = 2021 - ano;
  if (resultado < 18) {
    //   console.log("o numero " + teste + " é par");
    document.write("A idade " + resultado + " é de uma pessoa menor de idade");
  } else {
    //   console.log("o numero " + teste + " é impar");
    document.write("A idade " + resultado + " é de uma pessoa maior de idade");
  }
}
ano = parseInt(prompt("Digite o Ano em que nasceu"));

verifica_idade(ano);