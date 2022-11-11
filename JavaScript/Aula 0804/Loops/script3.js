var temp = 0;

do {
    idade = prompt("digite sua idade");
    
    if (idade > 0 && idade < 200 && idade % 1 === 0 && idade != " ") {
      alert("Idade Correta");
      temp = 1;
    } else {
      alert("Digite sua idade correta");
    };
}    while (temp != 1)

