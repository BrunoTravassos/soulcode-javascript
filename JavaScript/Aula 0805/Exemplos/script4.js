//fibonacci
// 1 1 2 3 5 8 13 21

function fibonacci(lim_repeticoes) {
    anterior_1 = 1;
    anterior_2 = 1;
    document.write(anterior_1+ " " + anterior_2 +" ");
    for (i = 0; i < lim_repeticoes; i++) {
      atual = anterior_1 + anterior_2;
      document.write(atual, " ");
      anterior_2 = anterior_1;
      anterior_1 = atual;
    }    
}

repeticoes = prompt("Quantas repeticoes");
fibonacci(repeticoes);