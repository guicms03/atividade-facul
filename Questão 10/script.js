const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número inteiro: ', (numero1) => {
  rl.question('Digite o segundo número inteiro: ', (numero2) => {
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    if (isNaN(numero1) || isNaN(numero2)) {
      console.log('Por favor, insira números inteiros válidos.');
      rl.close();
      return;
    }

    const inicio = Math.min(numero1, numero2);
    const fim = Math.max(numero1, numero2);

    console.log(`Números no intervalo entre ${inicio} e ${fim}:`);
    for (let i = inicio; i <= fim; i++) {
      console.log(i);
    }

    rl.close();
  });
});
