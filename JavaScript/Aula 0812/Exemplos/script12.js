class Pessoa {
  constructor(cpf, sobrenome) {
    this.cpf = cpf;
    this.sobrenome = sobrenome;
  }
  motrar_dados() {
    var dados;
    dados = this.cpf + " " + this.sobrenome;
    return dados;
  }
}
class Cliente extends Pessoa {
    constructor() {
        this.gerar_codigo;
    }
  gerar_codigo() {
    this.codigo = Math.random();
  }
  motrar_dados() {
      var dados;
      if(isNaN(this.codigo))
    dados = this.cpf + " " + this.sobrenome;
    return dados;
  }
}

var Maria = new Pessoa("123", "Santos");
var Jose = new Pessoa("321", "da Silva");
Jose.motrar_dados();
var Joao = new Cliente("345", "Silveira");
Joao.motrar_dados();