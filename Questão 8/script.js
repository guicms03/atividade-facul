const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];

rl.question('Digite o primeiro número: ', (numero1) => {
  rl.question('Digite o segundo número: ', (numero2) => {
    rl.question('Digite o terceiro número: ', (numero3) => {
      rl.question('Digite o quarto número: ', (numero4) => {
        rl.question('Digite o quinto número: ', (numero5) => {
          numeros.push(parseFloat(numero1));
          numeros.push(parseFloat(numero2));
          numeros.push(parseFloat(numero3));
          numeros.push(parseFloat(numero4));
          numeros.push(parseFloat(numero5));

          const soma = numeros.reduce((total, num) => total + num, 0);
          const media = soma / numeros.length;

          console.log(`A soma dos números é: ${soma}`);
          console.log(`A média dos números é: ${media}`);

          rl.close();
        });
      });
    });
  });
});
