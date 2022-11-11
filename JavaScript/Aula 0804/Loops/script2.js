var num = 100;
var num1 = 1;
document.write("Numero ao Quadrado" + "<br>");
/* while (num1 <= num) {
    if (num1 % 2 == 0) {
        document.write(num1 + "= " + num1 * num1 + "<br>");
    }
  
  num1++;
} */
do {
  if (num1 % 2 == 0) {
    document.write(num1 + "= " + num1 * num1 + "<br>");
  }

  num1++;  
}while (num1 <= num)