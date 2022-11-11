var alunos_nota = [];

alunos_nota["media"] = [];

alunos_nota["nome"] = [];
alunos_nota["nota_html"] = [];
alunos_nota["nota_css"] = [];
alunos_nota["nota_javascript"] = [];

alunos_nota["nome"][1] = "João";
alunos_nota["nota_html"][1] = 70;
alunos_nota["nota_css"][1] = 60;
alunos_nota["nota_javascript"][1] = 60;

alunos_nota["nome"][2] = "Maria";
alunos_nota["nota_html"][2] = 70;
alunos_nota["nota_css"][2] = 60;
alunos_nota["nota_javascript"][2] = 60;

alunos_nota["nome"][2] = "Paula";
alunos_nota["nota_html"][2] = 70;
alunos_nota["nota_css"][2] = 60;
alunos_nota["nota_javascript"][2] = 60;


for (i = 0; i < alunos_nota["nome"].length; i++) {
  alunos_nota["media"][i] =
    (alunos_nota["nota_html"][i] +
      alunos_nota["nota_css"][i] +
      alunos_nota["nota_javascript"][i]) /
    3;
}



for (i = 0; i < alunos_nota["nome"].length; i++) {
  document.write(
    alunos_nota["nome"][i],
    " ",
    alunos_nota["nota_html"][i],
    " ",
    alunos_nota["nota_css"][i],
    " ",
    alunos_nota["nota_javascript"][i],
    " ",
    alunos_nota["media"][i],
    "<br>"
  );
}

/* for (i = 0; i < 3; i++){
    alunos_nota["media"][i] =
      (alunos_nota["nota_html"][i] +
      alunos_nota["nota_css"][i] +
      alunos_nota["nota_javascript"][i])/3;
}

for (i = 0; i < 3; i++) {
    document.write(alunos_nota["nome"][i], " ", alunos_nota['nota_html'][i], " ", alunos_nota['nota_css'][i], " ", alunos_nota['nota_javascript'][i], "<br>");
} */