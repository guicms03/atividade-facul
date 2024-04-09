function avaliarCredito(saldo, historicoCredito, rendaMensal) {
    if (saldo > 1000 && historicoCredito && rendaMensal > 3000) {
      console.log("Crédito aprovado");
    } else {
      console.log("Crédito negado");
    }
  }
  