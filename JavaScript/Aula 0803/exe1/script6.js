//4) Crie um Script que tenha dois números e mostre o maior deles, ou se eles são iguais.
var numero_1 = 0;
var numero_2 = 0;

numero_1 = parseInt(prompt("Digite o primeiro numero"));
numero_2 = parseInt(prompt("Digite  o segundo numero"));

if (numero_1 == numero_2) {
  document.write("Numero 1 e numero 2 são iguais");
} else if (numero_1 > numero_2) {
  document.write("Numero "+numero_1+ "é maior que numero "+numero_2);
} else {
  document.write("Numero " + numero_1 + "é menor que numero " + numero_2);
}

/* COMANDO IF/ELSE com operadores Lógicos

5) Crie um script que tenha uma variável com a idade de uma pessoa e que verifique se ela é obrigada a votar seguindo as condições abaixo
- Menor de 16 anos - Não pode votar
- 16 e 17 anos - Voto opcional
- Maiores de 18 anos - Obrigatório
- Maiores de 70 anos - Não obrigatório */
