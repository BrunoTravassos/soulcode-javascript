var numeros = [];
for (var i = 0; i < 10; i++) numeros.push(parseInt(prompt("Digite o número")));

console.log(
  numeros.sort((a, b) => {
    if (a < b) return -1;
    else if (a > b) return 1;
  })
);
