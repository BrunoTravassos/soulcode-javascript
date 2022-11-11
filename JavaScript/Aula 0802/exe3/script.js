//Incremento

var lotacao_loja = 0;

// entraram 2 pessoas, saiu 1 entraram 3 , sairam 2

lotacao_loja = lotacao_loja + 1;
lotacao_loja = lotacao_loja + 1;
lotacao_loja = lotacao_loja - 1;
lotacao_loja = lotacao_loja + 1;
lotacao_loja = lotacao_loja + 1;
lotacao_loja = lotacao_loja + 1;
lotacao_loja = lotacao_loja - 1;
lotacao_loja = lotacao_loja - 1;

console.log('lotacao1 = ', lotacao_loja);

++lotacao_loja;
console.log("lotaçao2 = ", lotacao_loja);
++lotacao_loja;

console.log('lotaçao3 = ', lotacao_loja);
--lotacao_loja;
console.log("lotaçao4 = ", lotacao_loja);

lotacao_loja = 0;
console.log("lotaçao5 = ", lotacao_loja);0
console.log("lotaçao6 = ", ++lotacao_loja); //0+1 e imp
console.log("lotaçao7 = ", lotacao_loja++);//imp 1+1 
console.log("lotaçao8 = ", lotacao_loja); //2 e imp