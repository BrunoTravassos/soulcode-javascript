/* var teste = "Bruno";

document.write(teste.indexOf("o")); */


var teste = [],
  corrigidos = [],
  nomes_corrigidos = [],
  telefones_corrigidos = [];
teste[0] = "Bruno (21)27117";
teste[1] = "Thaisa (21)98999";

/* for (i = 0; i < teste.length; i++){
    document.write(teste[i].slice(0, teste[i].indexOf(" ("))+"<br>");
} */
// inserindo nos vetores apartir de 0, e apartir de " ("
for (i = 0; i < teste.length; i++) {
    nomes_corrigidos.push(teste[i].slice(0, teste[i].indexOf(" (")) + "<br>");
    telefones_corrigidos.push(teste[i].slice(teste[i].indexOf(" (") + 1, teste[i].length));
}
for (i = 0; i < teste.length; i++){
    document.write("Antes: " + teste[i] + "<br>");
    document.write("Depois: nome: " + nomes_corrigidos[i] + " telefone: ",  telefones_corrigidos[i]+"<br> <br>");

}