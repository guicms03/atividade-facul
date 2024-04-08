const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function validarInformacoes() {
  rl.question('Digite seu nome: ', (nome) => {
    rl.question('Digite sua idade: ', (idade) => {
      rl.question('Digite seu salário: ', (salario) => {
        rl.question('Digite seu sexo (f/m): ', (sexo) => {
          rl.question('Digite seu estado civil (s/c/v/d): ', (estadoCivil) => {
            if (nome.length <= 3) {
              console.log('Erro: Nome deve ter mais de 3 caracteres.');
              validarInformacoes();
            } else if (idade < 0 || idade > 150) {
              console.log('Erro: Idade deve estar entre 0 e 150 anos.');
              validarInformacoes();
            } else if (salario <= 0) {
              console.log('Erro: Salário deve ser maior que zero.');
              validarInformacoes();
            } else if (sexo !== 'f' && sexo !== 'm') {
              console.log('Erro: Sexo deve ser "f" ou "m".');
              validarInformacoes();
            } else if (estadoCivil !== 's' && estadoCivil !== 'c' && estadoCivil !== 'v' && estadoCivil !== 'd') {
              console.log('Erro: Estado civil deve ser "s", "c", "v" ou "d".');
              validarInformacoes();
            } else {
              console.log('Informações válidas:');
              console.log('Nome:', nome);
              console.log('Idade:', idade);
              console.log('Salário:', salario);
              console.log('Sexo:', sexo);
              console.log('Estado Civil:', estadoCivil);
              rl.close();
            }
          });
        });
      });
    });
  });
}

validarInformacoes();
