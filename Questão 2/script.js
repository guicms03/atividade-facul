function contarParesImpares(numeros) {
    let pares = 0;
    let impares = 0;
    for (let numero of numeros) {
        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
    return [pares, impares];
}

function main() {
    const numeros = [];
    for (let i = 0; i < 10; i++) {
        const numero = parseInt(prompt(`Digite o ${i+1}º número:`));
        if (!isNaN(numero)) {
            numeros.push(numero);
        } else {
            console.log("Por favor, insira um número válido.");
            return;
        }
    }

    const [pares, impares] = contarParesImpares(numeros);

    console.log(`Quantidade de números pares: ${pares}`);
    console.log(`Quantidade de números ímpares: ${impares}`);
}

main();
