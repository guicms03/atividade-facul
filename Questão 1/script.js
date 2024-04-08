const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pedirNota() {
  rl.question('Digite uma nota entre zero e dez: ', (nota) => {
    nota = parseFloat(nota);
    if (isNaN(nota) || nota < 0 || nota > 10) {
      console.log('Valor inválido. Por favor, digite uma nota entre zero e dez.');
      pedirNota();
    } else {
      console.log('Nota válida:', nota);
      rl.close();
    }
  });
}

pedirNota();
