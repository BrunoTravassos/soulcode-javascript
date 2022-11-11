class Gato {
  constructor(nome) {
    this.nome = nome;
  }
  falar() {
    console.log(this.nome + " faça barulho.");
  }
}
class Leao extends Gato {
  falar() {
    super.falar();
    console.log(this.nome + " roars.");
  }
}
let leao = new Leao("Fuzzy");
leao.falar();
// Fuzzy faça barulho.
// Fuzzy roars.
