const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número inteiro entre 1 e 10 para gerar a tabuada: ', (numero) => {
  numero = parseInt(numero);

  if (isNaN(numero) || numero < 1 || numero > 10) {
    console.log('Por favor, insira um número inteiro entre 1 e 10.');
    rl.close();
    return;
  }

  console.log(`Tabuada de ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} X ${i} = ${numero * i}`);
  }

  rl.close();
});
