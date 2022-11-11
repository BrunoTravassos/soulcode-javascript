class Pessoa{
        constructor(CPF_local,nome_local,idade_local) {
        this.cpf = CPF_local;
        this.nome = nome_local;
        //this.idade = idade_local;
        this.idade = prompt("digite idade")
    }
}

var maria = new Pessoa("3254354353","Maria");
var joao = new Pessoa("3876878563","Joao");

document.write(joao.idade)