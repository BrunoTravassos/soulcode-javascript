var vetor_S = ["A","b","B","C","c",1,2,3];

document.write("1º ");

  document.write(vetor_S);

document.write("<br>")

vetor_S.unshift("a");
document.write("2º ");

  document.write(vetor_S);

document.write("<br>");

vetor_S.push(4);
document.write("3º ");

  document.write(vetor_S);

document.write("<br>");

 for (i in vetor_S) {
   if (i > 4) {
     vetor_S[i] = vetor_S[parseInt(i) + 1];
   }
 }

 document.write("4º ");
vetor_S.pop();
 
   document.write( vetor_S);

document.write("<br>");

document.write("5º ");
vetor_S.shift();

  document.write(vetor_S);

document.write("<br>");

document.write("6º ");
vetor_S.pop();
    
  document.write(vetor_S);
