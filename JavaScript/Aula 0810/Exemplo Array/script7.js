function cadastrar() {
  var frutas = [];
  while (true) {
    aux = prompt("digite o nome da proxima fruta ou 0 para sair");

    if (aux == 0) {
      break;
    } else {
        //coloca na 1º posicao
      frutas.unshift(aux);
    }
  }

  for (i in frutas) {
    document.write("<br>o Nome do fruta é: " + frutas[i]);
  }
}
