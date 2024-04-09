function atualizarCadastro(cadastroAtivo, saldo) {
    if (cadastroAtivo && saldo > 0) {
      console.log("Cadastro ativo e saldo positivo");
    } else if (cadastroAtivo && saldo <= 0) {
      console.log("Cadastro ativo mas precisa regularizar saldo");
    } else {
      console.log("Por favor, atualize seu cadastro");
    }
  }
  