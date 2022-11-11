var tamanhoFonte = 100;
var aumentaDiminui = 10;

function onLoad() {
  var botaoAumenta = document.getElementById("botaoAumentaFonte");

  var botaoDiminui = document.getElementById("botaoDiminuiFonte");

  botaoAumenta.addEventListener("click", function (event) {
    tamanhoFonte = tamanhoFonte + aumentaDiminui;
    document.getElementById("corpo").style.fontSize =
      tamanhoFonte + aumentaDiminui + "%";
  });

  botaoDiminui.addEventListener("click", function (event) {
    tamanhoFonte = tamanhoFonte - aumentaDiminui;
    document.getElementById("corpo").style.fontSize =
      tamanhoFonte - aumentaDiminui + "%";
  });
}

function modoNoturno() {
//   document.getElementById("corpo").style.backgroundColor = "rgb(46, 46, 46)";
    document.getElementById("corpo", "bg-footer").style.color = "white";
    document.getElementById("corpo").style.background = "url(./bg4.jpg)";
    
}

function modoClaro() {
    document.getElementById("corpo").style.background = "url()";
  document.getElementById("corpo").style.backgroundColor = "white";
  document.getElementById("corpo").style.color = "black";
}

function validaIdade() {
  var idade = formulario.idade;
  if (
    idade.value == "" ||
    isNaN(idade.value) ||
    parseInt(idade.value) < 0 ||
    parseInt(idade.value) > 150
  ) {
    alert("Informe uma idade válida");

    idade.style.backgroundColor = "rgb(246, 195, 195)";

    idade.placeholder = "Informe uma idade válida.";
  } else if (parseInt(idade.value) > 0 && parseInt(idade.value) < 150) {
    idade.style.backgroundColor = "rgb(206, 243, 194)";
  }
}
