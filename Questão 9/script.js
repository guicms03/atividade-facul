function verificarPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return i;
        }
    }
    return true;
}

function main() {
    const numero = parseInt(prompt("Digite um número inteiro para verificar se é primo: "));
    
    if (!isNaN(numero)) {
        const divisor = verificarPrimo(numero);
        if (divisor === true) {
            console.log(`${numero} é um número primo.`);
        } else {
            console.log(`${numero} não é um número primo. É divisível por ${divisor}.`);
        }
    } else {
        console.log("Por favor, insira um número inteiro válido.");
    }
}

main();
