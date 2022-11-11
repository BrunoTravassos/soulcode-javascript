/* Escrever um algoritmo que leia 10 números e conte quantos deles
estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve
informar ao usuário quando o numero lido um número negativo. */

var val = 0,
  intervalo_1 = 0,
  intervalo_2 = 0,
  intervalo_3 = 0,
  intervalo_4 = 0;

for (i = 0; i < 10; i++) {
  val = parseInt(prompt("Digite os valores: "));

  if (val < 0) {
    alert("Numero informado é Negativo");
  }
  if (val >= 0 && val <= 25) {
    intervalo_1++;
  } else if (val >= 26 && val <= 50) {
    intervalo_2++;
  } else if (val >= 51 && val <= 75) {
    intervalo_3++;
  } else if (val >= 76 && val <= 100) {
    intervalo_4++;
  }
}

document.write("Quantidade entre [0-25]: " + intervalo_1 + "<br>");
document.write("Quantidade entre [26-50]: " + intervalo_2 + "<br>");
document.write("Quantidade entre [51-75]: " + intervalo_3 + "<br>");
document.write("Quantidade entre [76-100]: " + intervalo_4 + "<br>");
