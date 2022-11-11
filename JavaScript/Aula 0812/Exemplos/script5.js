var usuario = new Object();
usuario.nome = "Bruno";
usuario.idade = 35;
usuario.email = ["brunodefrontin@gmail.com", "brunodefrontin@hotmail.com"];

// imprime os valores da propriedade especifica
/* for(i in usuario.email)
console.log(usuario.email[i]) */

//imprime os valores de todos as propriedade do obj 
function mostrarProps(obj, nomeDoObj) {
  var resultado = "";
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      resultado += nomeDoObj + "." + i + " = " + obj[i] + "<br>";
    }
  }
  return resultado;
}
//document.write(mostrarProps(usuario,"usuario"));
console.log(mostrarProps(usuario, "usuario"));