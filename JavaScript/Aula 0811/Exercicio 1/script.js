/* 1) Crie um programa que tenha um botão em html que ao ser clicado acesse uma função que peça para o usuário digitar um numero N que seja maior que 0 e menor que 10 que corresponderá a quantidade de números do Array, que serão temperaturas. Em seguida, leia também um número M que seja maior que 0 e menor que 10 que corresponderá a quantidade de nomes que serão inseridos em um outro Array. Em seguida, utilizando o prompt de comando, receba a quantidade N de temperaturas e armazene no Array. Utilize o prompt para receber quantidade M de nomes e armazene no outro vetor. Ao final, siga as instruções abaixo:

• Verifique se no vetor de nomes existe o nome “Eliana”
• Exiba na tela as temperaturas maiores que 20.
• Exiba a posição do nome “Carlos” caso exista. Caso não exista, informe ao usuário.
• Exiba o cubo dos números do Array de números. */

function click_Btn() {
  var temperaturas = [];
  var nomes = [];
  var cuboNumeros = [];

  //Verifica qtd de numeros array
  var verificaQuantidade = (qtd_t, qtd_n) => {
    if (qtd_n && qtd_t > 0 && qtd_n && qtd_t < 10) {
      return 1;
    } else {
      return 0;
    }
  };

  //pede qtd de num arrays
  var qtd_temperaturas = parseInt(
    prompt("Digite a quantidade de temperaturas")
  );
  var qtd_nomes = parseInt(prompt("Digite a quantidade de nomes"));
  aux = verificaQuantidade(qtd_temperaturas, qtd_nomes);

  //preenche vetores
  if (aux) {
    for (var i = 0; i < qtd_temperaturas; i++) {
      temperaturas.push(parseInt(prompt("Digite a temperatura: ")));
    }
  } else {
    alert("Errado");
  }

  if (aux) {
    for (var i = 0; i < qtd_nomes; i++) {
      nomes.push(prompt("Digite o nome: "));
    }
  }

  document.write("T " + temperaturas + "<br>");
  document.write("N " + nomes + "<br>");

  //verifica eliana
  var verifica1 = nomes.find((n) => n === "Eliana");
  document.write(verifica1);

  if (verifica1) {
    document.write("Existe Eliana na lista");
  } else {
    document.write("Não existe o nome na lista");
  }

  //verifica temperatura > 20
  temperaturas.forEach((elemento) => {
    if (elemento > 20) {
      document.write("<br>" + elemento + " , ");
    }
  });

  //verifica carlos
  var verifica2 = nomes.findIndex((n2) => n2 == "Carlos");
  document.write("<br>" + verifica2);
  if (verifica2 >= 0) {
    document.write("<br>existe o nome Carlos na posição " + verifica2);
  } else {
    document.write("<br>não existe o nome Carlos na lista");
  }
  //calcula cubo
  cuboNumeros = temperaturas.map((elemento) => Math.pow(elemento, 3));
  document.write("<br>Vetor ao Cubo: " + cuboNumeros + "<br>");
}
