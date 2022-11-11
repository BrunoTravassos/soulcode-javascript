var teste = ["F", "r", 2, 3, 5, 2, 6, "J", "a", "T", 1, 2, 4];
var aux = [];

document.write(teste, "<br>");

/* document.write(teste.reverse());
document.write("<br>");
 */

for (i in teste) {
    aux.push(teste[parseInt(teste.length)-parseInt(i)-1]) 
}
document.write(aux, "<br>")