/* 5 - Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de
três e que se encontram no conjunto dos números de 1 até 500. */

var soma = 0;
for (i = 1; i <= 500; i++) {
  if (i % 3 == 0 && i % 2 != 0) {
    soma += i;
    // document.write(i, "<br>");
  }

  // document.write(i, "<br>");
}
document.write("Soma dos Valores: " + soma + "<br>");
