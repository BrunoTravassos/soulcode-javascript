// retirando um indice qualquer do array

function cadastrar() {
    var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (i in num) {
        if (i > 3) {
            num[i] = num[parseInt(i) + 1];
        }
    }
    num.pop
    for (i in num) {
        document.write("<br>num: ", num[i]);
    }
}
