/* 1- os alunos tem 03 notas;
2 - Você deverá fazer a média entre as três notas;
3 - Se a media for maior ou igual a 7 exiba na tela "Aprovado";
4- Se a media for menor que 7 exiba na tela "Reprovado";
5 - Atribua nome aos alunos e inclua junto a exibição da classificação.


Obs.: Faça este processo para 03 alunos e enquadre cada um nas situações acima..
 */

var aluno1 = "Zé";
var aluno2 = "Jozé";
var aluno3 = "JozéCarlos";

var nota1 = 9;
var nota2 = 9;
var nota3 = 9;

var nota1_2 = 5;
var nota2_2 = 6;
var nota3_2 = 7;

var nota1_3 = 4;
var nota2_3 = 9;
var nota3_3 = 2;

var media_1 = 0;
var media_2 = 0;
var media_3 = 0;

media_1 = (nota1 + nota2 + nota3) / 3;
media_2 = (nota1_2 + nota2_2 + nota3_2) / 3;
media_3 = (nota1_3 + nota2_3 + nota3_3) / 3;

//console.log("media1 = " + media_1);
/* console.log(media_1 >= 7 ?
    "Aluno: " + aluno1 + " Aprovado com media: " + media_1
    : "Aluno: " + aluno1 + " Reprovadocom media: " + media_1);
 */
document.write(
  media_1 >= 7
    ? "Aluno: " + aluno1 + " Aprovado com media: " + media_1 + "<br>"
    : "Aluno: " + aluno1 + " Reprovadocom media: " + media_1 + "<br>"
);

//console.log("media2 = " + media_2);
/* console.log(
  media_2 >= 7
    ? "Aluno: " + aluno2 + " Aprovado com media: "+media_2
    : "Aluno: " + aluno2 + " Reprovado com media: "+media_2
);
 */
document.write(
  media_2 >= 7
    ? "Aluno: " + aluno2 + " Aprovado com media: " + media_2 + "<br>"
    : "Aluno: " + aluno2 + " Reprovado com media: " + media_2 + "<br>"
);

//console.log("media = " + media_3);
/* console.log(
  media_3 >= 7
    ? "Aluno: " + aluno3 + " Aprovado com media: "+media_3
    : "Aluno: " + aluno3 + " Reprovado com media: "+media_3
);
 */
document.write(
  media_3 >= 7
    ? "Aluno: " + aluno3 + " Aprovado com media: " + media_3 + "<br>"
    : "Aluno: " + aluno3 + " Reprovado com media: " + media_3 + "<br>"
);
