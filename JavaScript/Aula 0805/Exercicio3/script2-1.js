/* 2.1 -
Faça um programa, com uma função que necessite de três argumentos, e que forneça a soma desses três argumentos através de uma função. Seu script também deve fornecer a média dos três números, através de uma segunda função que chama a primeira. */


var soma = () => num1 + num2 + num3,
  num1 = parseInt(prompt("Digite um numero")),
  num2 = parseInt(prompt("Digite um numero"));
  num3 = parseInt(prompt("Digite um numero"));
  
 var media = (soma) => (parseInt(soma) / 3);

document.write("Soma: " + soma() + "<br>");
document.write("Media " + media(soma()));
