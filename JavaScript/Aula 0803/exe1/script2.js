var salario = 1800;
var fgts = 0.2;
var decimo_terceiro = salario;
var adicionao_ferias =  (salario * 0.3);
var custo_funcionario_ano = 0;
var imposto = 0; 
//document.write(ferias)

//calcule custo funcionario
//imposto * salarios, 13,ferias

/* custo_funcionario_ano = (salario -(salario*fgts)+salario) * 12 + (ferias * fgts);
 */

imposto = fgts * ((12 * salario) + decimo_terceiro + adicionao_ferias);

custo_funcionario_ano = (salario * 12) + decimo_terceiro + ((1 / 3) * salario) + imposto;
    
document.write(custo_funcionario_ano);