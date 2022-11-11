/* 5 - Crie uma função que verifica se o numero é primo, se for primo, retorna o numero elevado ao cubo, senão, exibe na tela não é primo. Obs.: o valore retornado deve ser exibido fora da função;
 */

var numero = () => {
    for ( i = 2; i < num; i++)
        if (num % i == 0) {
            return false;
        }
    // return num > 1;
    return true;
}, num = parseInt(prompt("Digite um numero"));;


if (numero() == true) {
    document.write("Numero " + num + " é primo"+"<br>");
    document.write("Cubo: " + num*num*num);
} else {
    document.write("Numero " + num + " não é primo");
}
  

