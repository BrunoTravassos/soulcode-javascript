var teste = [],
  corrigidos = [],
  nomes_corrigidos = [],
  telefones_corrigidos = [];
teste[0] = "bruno frontin travassos";
teste[1] = "Thaisa (21)98999";

/* for (i = 0; i < teste.length; i++){
    document.write(teste[i].slice(0, teste[i].indexOf(" ("))+"<br>");
} */
// inserindo nos vetores apartir de 0, e apartir de " ("
/* 
for (i = 0; i < teste.length; i++) {
  nomes_corrigidos.push(teste[i].slice(0, teste[i].indexOf(" (")) + "<br>");
  telefones_corrigidos.push(
    teste[i].slice(teste[i].indexOf(" (") + 1, teste[i].length)
  );
  telefones_corrigidos[i] = telefones_corrigidos[i].replace("(", " ");
  telefones_corrigidos[i] = telefones_corrigidos[i].replace(")", " ");
} */
nome = "bruno frontin travassos";

function capitaliza(nome) {
    var nome_captalizado, codigo = 32;
    document.write("letra: " + nome[0] + " codigo " + nome.charCodeAt(0) + " capitalizada: "+(nome.charCodeAt(0)-codigo));
    
    return nome_captalizado
}
capitaliza(nome);
