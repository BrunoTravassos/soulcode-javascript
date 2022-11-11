/* COMANDO IF/ELSE com operadores Lógicos

5) Crie um script que tenha uma variável com a idade de uma pessoa e que verifique se ela é obrigada a votar seguindo as condições abaixo
- Menor de 16 anos - Não pode votar
- 16 e 17 anos - Voto opcional
- Maiores de 18 anos - Obrigatório
- Maiores de 70 anos - Não obrigatório */


var idade = 0;

idade = parseInt(prompt("Qual a sua Idade"));

if (idade >= 70) {
  document.write("Idade = " + idade + " Não obrigatório");
} else if (idade >= 18) {
  document.write("Idade = " + idade + " Obrigatório");
} else if (idade >15 && idade<18) {
  document.write("Idade = " + idade + " Voto Opcional");
} if (idade < 16) {
  document.write("Idade = " + idade + " Não pode votar");
}

