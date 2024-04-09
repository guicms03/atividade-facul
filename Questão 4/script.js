function realizarTransferencia(saldoOrigem, saldoDestino, valorTransferencia, limiteTransferencia) {
    if (valorTransferencia <= saldoOrigem && valorTransferencia <= limiteTransferencia) {
      saldoOrigem -= valorTransferencia;
      saldoDestino += valorTransferencia;
      console.log("Transferência realizada com sucesso");
    } else if (valorTransferencia > saldoOrigem) {
      console.log("Saldo insuficiente na origem");
    } else {
      console.log("Limite de transferência excedido");
    }
  }
  