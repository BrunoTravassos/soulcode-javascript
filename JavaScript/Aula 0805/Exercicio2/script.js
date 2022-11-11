/* 1.Crie uma função que recebe 2 parâmetros(numéricos) e retorna a divisão deles. Controle : o usurario não pode digitar letras, não pode acontecer Divisão por 0, sempre dividir o maior numero pelo menor numero e mostrar o numero arredondado */

function verifica_caracter(num1) {
  if (isNaN(num1)) {
    return 0;
  } else {
    return 1;
  }
}
function divisao(num1, num2) {
  return (divisao = num1 / num2);
}

function verifica_numeros(num1, num2) {
  if ((num1 || num2) > 0 && (num1 || num2) != " ") {
    if (num1 > num2) {
      document.write("Foi dividido: " + num1 + " / " + num2 + "<br>");
      var val = divisao(num1, num2);
      return val;
    } else {
      aux = num1;
      num1 = num2;
      num2 = aux;
      document.write("Foi dividido: " + num1 + " / " + num2 + "<br>");
      var val = divisao(num1, num2);
      return val;
    }
  } else {
    return (val = 0);
  }
}

num1 = prompt("Digite o Numero");
nan = verifica_caracter(num1);
if (nan == 1) {
  num2 = prompt("Digite o Segundo Numero");
  nan = verifica_caracter(num2);
  if (nan == 1) {
    var val = verifica_numeros(num1, num2);
    if (val == 0) {
      alert("Operação Inválida");
    } else {
      document.write("O Resultado da divisão: " + val);
    }
  } else {
    alert("Operação Inválida");
  }
} else {
  alert("Operação Inválida");
}
