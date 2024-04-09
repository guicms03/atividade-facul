function calcularMenorMaiorSoma(valores) {
    let menor = valores[0];
    let maior = valores[0];
    let soma = 0;

    for (let valor of valores) {
        if (valor < menor) {
            menor = valor;
        }
        if (valor > maior) {
            maior = valor;
        }
        soma += valor;
    }

    return [menor, maior, soma];
}

function main() {
    const quantidade = parseInt(prompt("Digite a quantidade de números a serem inseridos: "));
    const valores = [];

    for (let i = 0; i < quantidade; i++) {
        const valor = parseFloat(prompt(`Digite o ${i + 1}º número:`));
        if (!isNaN(valor)) {
            valores.push(valor);
        } else {
            console.log("Por favor, insira um número válido.");
            return;
        }
    }

    if (valores.length > 0) {
        const [menor, maior, soma] = calcularMenorMaiorSoma(valores);
        console.log(`Menor valor: ${menor}`);
        console.log(`Maior valor: ${maior}`);
        console.log(`Soma dos valores: ${soma}`);
    } else {
        console.log("Nenhum número fornecido para análise.");
    }
}

main();
