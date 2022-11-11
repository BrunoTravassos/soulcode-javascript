function cadastrar() {
  var func = [];
  // var continuar_cadastrando = 1;
  // while (continuar_cadastrando == 1) {
  while (true) {
      aux = prompt("digite o nome do proximo funcionario ou 0 para sair");
      
    if (aux == 0) {
      //continuar_cadastrando = 0;
      break;
    } else {
        func.push(aux);
    }
  }

  for (i in func) {
    document.write("<br>o Nome do funcionario é: " + func[i]);
  }
}
