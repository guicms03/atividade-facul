function fibonacciAteLimite(limite) {
    let sequencia = [0, 1];
    let proximoTermo = sequencia[0] + sequencia[1];
    
    while (proximoTermo <= limite) {
        sequencia.push(proximoTermo);
        proximoTermo = sequencia[sequencia.length - 2] + sequencia[sequencia.length - 1];
    }
    
    return sequencia;
}

function main() {
    const limite = 500;
    const sequenciaFibonacci = fibonacciAteLimite(limite);

    console.log("Sequência de Fibonacci até que o valor seja maior que 500:");
    console.log(sequenciaFibonacci.join(", "));
}

main();
