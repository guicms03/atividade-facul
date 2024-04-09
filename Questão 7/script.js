function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = numero; i >= 1; i--) {
        fatorial *= i;
    }
    return fatorial;
}

function main() {
    while (true) {
        let numero = parseInt(prompt("Digite um número inteiro positivo menor que 16 para calcular o fatorial (ou -1 para sair): "));
        
        if (numero === -1) {
            console.log("Programa encerrado.");
            break;
        }

        if (!isNaN(numero) && numero >= 0 && numero < 16) {
            const fatorial = calcularFatorial(numero);
            console.log(`${numero}! = ${fatorial}`);
        } else {
            console.log("Por favor, insira um número inteiro positivo menor que 16 válido.");
        }
    }
}

main();
