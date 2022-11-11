class Pessoa{
    constructor(nome, email, idade) {
        this.nome = nome;
        this.email = email;
        this.idade = idade;
    }
    mostrar_dados() {
        return this.nome + " " + this.email + " " + this.idade;
    }
}


function enviar_dados() {
    var nome_input = document.getElementById("aaa").value;
    var email_input = document.getElementById("bbb").value;
    var idade_input = document.getElementById("ccc").value;

    //document.write(nome+" "+email+" "+idade)
    var pessoa1 = new Pessoa(nome_input, email_input, idade_input);

    document.write(pessoa1.mostrar_dados());
}