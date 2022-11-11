/* class Pessoa {
  constructor(nome) {
    //this.cpf = CPF_local;
    this.nome = nome;
    //this.idade = idade_local;
   // this.idade = prompt("digite idade");
  }
}
class Cliente extends Pessoa{
    cadastrar_Cliente() {
        document.write(this.nome + " cadastrado");
    }
    
}

var cliente = new Cliente("Maria");
cliente.cadastrar_Cliente;
 */
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
  
}
class Cliente extends Pessoa {
  cadastrar_Cliente() {
    console.log(this.nome + " Cadastrado");
  }
}
var cliente = new Cliente("Joao");
cliente.cadastrar_Cliente();