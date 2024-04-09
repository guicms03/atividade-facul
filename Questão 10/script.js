function verificarPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function mostrarNumerosPrimosAteN(N) {
    let numerosPrimos = [];
    let divisoes = 0;
    
    for (let i = 2; i <= N; i++) {
        if (verificarPrimo(i)) {
            numerosPrimos.push(i);
        }
        divisoes += Math.sqrt(i);
    }

    return { numerosPrimos, divisoes };
}

function main() {
    const N = parseInt(prompt("Digite um número inteiro para encontrar todos os primos até ele: "));
    
    if (!isNaN(N) && N >= 1) {
        const { numerosPrimos, divisoes } = mostrarNumerosPrimosAteN(N);
        console.log(`Números primos até ${N}: ${numerosPrimos.join(', ')}`);
        console.log(`Número total de divisões: ${divisoes}`);
    } else {
        console.log("Por favor, insira um número inteiro válido maior ou igual a 1.");
    }
}

main();
