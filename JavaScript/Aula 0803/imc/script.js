function Calcular() {
    var imc = 0;
  const altura = document.getElementById("id1");
    const peso = document.getElementById("id2");
    var h1 = 0;
    var p1= 0;
    h1 = parseFloat(altura);
    p1 = parseFloat(peso);
    
    imc = p1 / (h1 * h1);


    document.getElementById("resposta").innerHTML = "Input OK"+imc;
    /* if (imc >= 40) {
        //console.log("imc = " + parseInt(imc) + " Obesidade gra 3");
        document.getElementById("resposta").innerHTML =
          "imc = " + parseInt(imc) + " Obesidade gra 3";
    } else if (imc >= 35) {
      document.getElementById("resposta").innerHTML =
        "imc = " + parseInt(imc) + " obesidade grau 2";
    } else if (imc >= 30) {
      document.getElementById("resposta").innerHTML =
        "imc = " + parseInt(imc) + " obesidade grau 1";
    } else if (imc >= 25) {
      document.getElementById("resposta").innerHTML =
        "imc = " + parseInt(imc) + " sobrepeso";
    } else if (imc >= 18.5) {
      document.getElementById("resposta").innerHTML =
        "imc = " + parseInt(imc) + " peso normal";
    } else {
      document.getElementById("resposta").innerHTML =
        "imc = " + parseInt(imc) + " abaixo do peso";
    } */
  
}
