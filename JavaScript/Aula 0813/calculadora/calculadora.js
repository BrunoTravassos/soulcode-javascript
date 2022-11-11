function insert(num) {
  var numero = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = numero + num;
}
function clean() {
  document.getElementById("resultado").innerHTML = "";
}
function back() {
  var resultado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}
function calcular() {
  var resultado = document.getElementById("resultado").innerHTML;
  if (resultado) {
    document.getElementById("resultado").innerHTML = eval(resultado);
  } else {
    document.getElementById("resultado").innerHTML = "Nada...";
  }
}


function insert2(num) {
  var numero = document.getElementById("resultado2").innerHTML;
  document.getElementById("resultado2").innerHTML = numero + num;
}
function clean2() {
  document.getElementById("resultado2").innerHTML = "";
}
function back2() {
  var resultado = document.getElementById("resultado2").innerHTML;
  document.getElementById("resultado2").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}
function calcular2() {
  var resultado = document.getElementById("resultado2").innerHTML;
  if (resultado) {
    document.getElementById("resultado2").innerHTML = eval(resultado);
  } else {
    document.getElementById("resultado2").innerHTML = "Nada...";
  }
}
function raiz() {
  var resultado = (document.getElementById("resultado2").innerHTML);
  if (resultado) {
    document.getElementById("resultado2").innerHTML = Math.sqrt(resultado);
  } else {
    document.getElementById("resultado2").innerHTML = "Nada...";
  }
}
function quadrado() {
  var resultado = (document.getElementById("resultado2").innerHTML);
  if (resultado) {
    document.getElementById("resultado2").innerHTML = (Math.pow(resultado,2));
  } else {
    document.getElementById("resultado2").innerHTML = "Nada...";
  }
}
function cubo() {
  var resultado = document.getElementById("resultado2").innerHTML;
  if (resultado) {
    document.getElementById("resultado2").innerHTML = Math.pow(resultado, 3);
  } else {
    document.getElementById("resultado2").innerHTML = "Nada...";
  }
}

/* function teste() {
  $("calculadora")
    .addClass("disable")
    .click(function () {
      return false;
    });
} */

/* function padrao() {
  var calCientifica = document.getElementById("calculadora2");
  calCientifica.classList.toggle("hide");
} */
var btnPadrao = document.getElementById("padrao");
btnPadrao.addEventListener("click", function (){
  var calCientifica = document.getElementById("calculadora2");
  calCientifica.classList.toggle("hide");
});

var btnPadrao2 = document.getElementById("cientifica");
btnPadrao2.addEventListener("click", function () {
  var calCientifica2 = document.getElementById("calculadora");
  calCientifica2.classList.toggle("hide");
});