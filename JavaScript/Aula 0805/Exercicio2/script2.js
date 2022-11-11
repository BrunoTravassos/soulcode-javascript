/* Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade(18 anos acima) ou menor (considere 2021) .Controle : o usuário não pode digitar idade negativa ou acima de 130 anos por exemplo */


function verifica_positivo(ano) {
    if (ano > 0) {
        return ano;
    } else {
        return 0;
    }
}

function verifica_idade(ano) {
  resultado = 2021 - ano;
  if (resultado < 18) {
    //   console.log("o numero " + teste + " é par");
    document.write("A idade " + resultado + " é de uma pessoa menor de idade");
  } else if(resultado<130){
    //   console.log("o numero " + teste + " é impar");
    document.write("A idade " + resultado + " é de uma pessoa maior de idade");
  } else {
    alert("Ano invalido!");  
  }
}
ano = parseInt(prompt("Digite o Ano em que nasceu"));
aux = verifica_positivo(ano);
if (aux != 0) {
verifica_idade(ano);    
} else {
    alert("Ano invalido!");
}
