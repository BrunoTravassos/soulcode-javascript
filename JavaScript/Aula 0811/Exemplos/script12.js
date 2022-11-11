//Aumenta a primeira letra da string
/* nome = "bruno frontin travassos";
var nome_captalizado;
function capitaliza(nome) {
     aux = nome[0];
    nome_captalizado = nome.replace(aux, aux.toUpperCase());


    return nome_captalizado;
}

document.write(capitaliza(nome));
 */
//aumenta todas as primeiras letras da string
nome = "bruno de frontin travassos"
const capitaliza = (nome) => {
  let array = nome.split(" ");
  let nomeCapitalizado = array.map(
    (nome) => nome.charAt(0).toUpperCase() + nome.substr(1)
  );

  return nomeCapitalizado.join(" ");
};
document.write(capitaliza(nome));