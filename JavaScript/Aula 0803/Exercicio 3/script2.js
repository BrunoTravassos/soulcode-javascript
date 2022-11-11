//2) Faça um script que mostre na tela se um número é par ou ímpar

 var numero = 0;
var resultado = 0;


numero = parseInt(prompt("Digite um Número"));
resultado = numero % 2;

if (resultado == 0) {
    document.write("Numero "+numero+" é par");
}
if (resultado != 0) {
    document.write("Numero " + numero + " é impar");
} 
