function realizarSaque(saldoAtual, valorSaque) {
    if (valorSaque <= saldoAtual) {
      saldoAtual -= valorSaque;
      console.log(`Saque realizado com sucesso. Saldo atual: R$${saldoAtual}`);
    } else {
      console.log("Saldo insuficiente");
    }
  }
  