/* var idade = function () {
    while (true) {
        a = parseInt(prompt("Digite a idade"))
        if (a == "" || isNaN(a) || a <= 0 || a > 150) {
            alert("Digite uma idade valida! Ex:14, 22")
        } else {
            break;
        }
    }
    return a;
}

for (i = 0; i < 5; i++) {
  document.write("Idade: "+idade()+"<br>");
}
 */
//Arrow Function

var idade = () => parseInt(prompt("Digite a idade"));
    /* if (a == "" || isNaN(a) || a <= 0 || a > 150) {
      alert("Digite uma idade valida! Ex:14, 22");
    } else {
      break;
    }
   */


// for (i = 0; i < 5; i++) {
  document.write("Idade: " + idade() + "<br>");
// }
