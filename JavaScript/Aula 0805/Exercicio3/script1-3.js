/* 3 - Crie uma função que informe se o sexo é feminino ou masculino. ex: usuário digitou 'F,' programa retorna: é feminino!. */

var sexo = () => (prompt("Informe o sexo - F/M"));
  
if(sexo()=="F"){
    document.write("Feminino " );    
} else {
    document.write("Masculino ");
}

