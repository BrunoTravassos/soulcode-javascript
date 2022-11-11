/* var txt = "Frase qualquer sobre qualquer coisa";
txtAux = txt.split(" ");
console.log(txtAux); */ //[ 'Frase', 'qualquer', 'sobre', 'qualquer', 'coisa' ]

/* var txt = "Frase qualquer sobre qualquer coisa";
txtAux = txt.split(" ", 3);
console.log(txtAux); *///[ 'Frase', 'qualquer', 'sobre' ]

/* var txt = "emailqualquer@gmail";
txtAux = txt.split("@");
console.log(txtAux); */ //[ 'emailqualquer', 'gmail' ]

/* var txt = "Frase qualquer com 8000 numeros sobre qualquer coisa";
txtAux = txt.split(/\d+/);
console.log(txtAux); */ //[ 'Frase qualquer com ', ' numeros sobre qualquer coisa' ] cortou o d = numeros

/* var txt = "Frase qualquer com 8000 numeros sobre qualquer coisa";
txtAux = txt.split(/\s+/);
console.log(txtAux); */ ["Frase", "qualquer", "com", "8000", "numeros", "sobre", "qualquer", "coisa"];

var txt = "Frase qualquer sobre qualquers coisa";
txtAux = txt.slice(15, -6);
console.log(txtAux);

var txt = [
  "Frase",
  "qualquer",
  "com",
  "8000",
  "numeros",
  "sobre",
  "qualquer",
  "coisa",
];
txtAux = txt.slice(-4, -2);
console.log(txtAux);
