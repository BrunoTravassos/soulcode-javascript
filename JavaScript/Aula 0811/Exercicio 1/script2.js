//sorteia
//valida

function sorteia_numero() {
    var num = 0;
    while(true) {
        num = Math.round(Math.random() * 100);
        if (num > 0 && num <= 60)
            return num;
    }
    
}

function verifica_Repitidos(vetor, numero) {
    for (var i in vetor) {
        if (vetor[i] == numero) {
            document.write("Aposta invalida! <br>");
            return true;
        }
        return false;
    }    
}

function gerarAposta() {
    var aposta = [], num_teste;
    document.write("Aposta valida: <br>")
    for (var i = 0; i < 6; i++){
        num_teste = (sorteia_numero());
        while (aposta.some(elemento => elemento == num_teste)) {
            num_teste = sorteia_numero(); 
         }
            aposta.push(num_teste); 
    }
    document.write(aposta)
}