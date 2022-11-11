var idade = 35;
var filho = 0;
var pai = 62;
var irma = 30;
var renda = 3500;
var somaIdade = 0;
var somaIdadePai = 0;
var multIdade = 0;
var totalRenda = 0;
  //1

  (somaIdade = idade + filho);

//2
somaIdadePai = pai *somaIdade;

//3
multIdade = (irma * idade) / somaIdade;
//4
totalRenda = (renda / 4) * 30;

document.write(
  "Soma da sua idade some com a do seu filho = " +
    somaIdade +
    "<br>" +
    "Soma do item anterior, multiplique com a idade do seu pai = " +
    somaIdadePai +
    "<br>" +
    "Some a idade dos seus irmãos, multiplique com sua idade e divida com o resultado do item 01 = " +
    multIdade +
    "<br>" +
    "Divida renda familiar pela quantidade de pessoas que compõem sua família e o resultado multiplique por 30 = " +
    totalRenda
);


