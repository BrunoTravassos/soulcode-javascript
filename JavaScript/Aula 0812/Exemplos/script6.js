class Usuario {
  constructor(nome, idade, email) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
  }
  mostra_dados() {
    var dados;
    dados = this.nome + " " + this.idade+" "+this.email;
    return dados;
  }
}



var usuario1 = new Usuario("Bruno", 35,["brunodefrontin@gmail.com", " brunodefrontin@hotmail.com"]);

var usuario2 = new Usuario("Thaisa", 35,"thaisa_kuhn@hotmail.com" );


document.write(usuario1.mostra_dados() + "<br>");
document.write(usuario2.mostra_dados() + "<br>");