/* Crie um array com 101 posições. Cada elemento deve conter o quadrado de seu índice.
Ou seja: 0, 1, 4, 9, 16, 25, 36, ..., 10000
 */

var quadrado = [];
var x = [];
for (i = 0; i <= 100; i++) {
    quadrado[i] = i * i;
    
    document.write("Posição " + [i] + " = " + quadrado[i]+"<br>");
}

