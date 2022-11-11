var numero = [];
var x = parseInt(prompt("Digite o tamanha do vetor?"));

//funcao dobra
var dobra = (numero) => numero* 2;

//imprime array
for (i = 0; i < x; i++) {
    numero[i] = i + 1;
}
document.write("vetor = [" + numero + "]" + "<br>");

//chama funcao dentro do array
for (i = 0; i < numero.length; i++){
      numero[i]=dobra(numero[i]);
}
document.write("O resultado, após a função é:"+"<br>")
document.write("vetor = ["+numero+"]");


