const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularCrescimento() {
  rl.question('Informe a população inicial do país A: ', (populacaoA) => {
    rl.question('Informe a população inicial do país B: ', (populacaoB) => {
      rl.question('Informe a taxa de crescimento anual do país A (em porcentagem): ', (taxaCrescimentoA) => {
        rl.question('Informe a taxa de crescimento anual do país B (em porcentagem): ', (taxaCrescimentoB) => {
          populacaoA = parseFloat(populacaoA);
          populacaoB = parseFloat(populacaoB);
          taxaCrescimentoA = parseFloat(taxaCrescimentoA) / 100;
          taxaCrescimentoB = parseFloat(taxaCrescimentoB) / 100;

          if (isNaN(populacaoA) || isNaN(populacaoB) || isNaN(taxaCrescimentoA) || isNaN(taxaCrescimentoB) ||
              populacaoA <= 0 || populacaoB <= 0 || taxaCrescimentoA < 0 || taxaCrescimentoB < 0) {
            console.log('Erro: As populações e as taxas de crescimento devem ser valores numéricos positivos.');
            calcularCrescimento();
          } else {
            let anos = 0;
            while (populacaoA <= populacaoB) {
              populacaoA *= (1 + taxaCrescimentoA);
              populacaoB *= (1 + taxaCrescimentoB);
              anos++;
            }
            console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse a população do país B.`);
            rl.question('Deseja calcular novamente? (s/n): ', (resposta) => {
              if (resposta.toLowerCase() === 's') {
                calcularCrescimento();
              } else {
                rl.close();
              }
            });
          }
        });
      });
    });
  });
}

calcularCrescimento();
