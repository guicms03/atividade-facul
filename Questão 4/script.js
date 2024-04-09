function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = numero; i >= 1; i--) {
        fatorial *= i;
    }
    return fatorial;
}

function main() {
    const numero = parseInt(prompt("Digite um número inteiro para calcular o fatorial: "));
    
    if (!isNaN(numero) && numero >= 0) {
        const fatorial = calcularFatorial(numero);
        console.log(`${numero}! = ${fatorial}`);
    } else {
        console.log("Por favor, insira um número inteiro válido.");
    }
}

main();
