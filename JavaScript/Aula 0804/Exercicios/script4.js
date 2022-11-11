/* 4 - Peça ao usuário para digitar 10 idades. Exiba quantas pessoas são maior de idade (18 anos) e quantas são menores. */
var menores = 0,
  maiores = 0;

for (i = 0; i < 10; i++) {
  val = parseInt(prompt("Digite a Idade: "));

  if (val < 18) {
    menores++;
  } else {
    maiores++;
  }
}

document.write("Pessoas maiores de idade : " + maiores + "<br>");
document.write("Pessoas menores de idade: " + menores);
