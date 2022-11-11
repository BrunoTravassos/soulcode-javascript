//1) Faça um script que mostre na tela se um número é positivo, negativo ou nulo (zero);

 var numero = 0;

numero = parseInt(prompt("Digite um Número"));
if (numero > 0) {
    document.write("Numero "+numero+" é positivo");
}
if (numero < 0) {
    document.write("Numero "+numero+" é negativo");
}
if (numero == 0) {
    document.write("Numero "+numero+" é nulo");
}
 
