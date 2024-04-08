const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pedirCredenciais() {
  rl.question('Digite seu nome de usuário: ', (nomeUsuario) => {
    rl.question('Digite sua senha: ', (senha) => {
      if (senha === nomeUsuario) {
        console.log('Erro: A senha não pode ser igual ao nome de usuário.');
        pedirCredenciais();
      } else {
        console.log('Credenciais válidas. Nome de usuário:', nomeUsuario, 'Senha:', senha);
        rl.close();
      }
    });
  });
}

pedirCredenciais();
