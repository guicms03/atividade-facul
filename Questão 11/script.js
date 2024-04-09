function calcularMedia(notas) {
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
    }
    return soma / notas.length;
}

function main() {
    const quantidade = parseInt(prompt("Digite a quantidade de notas: "));
    const notas = [];

    for (let i = 0; i < quantidade; i++) {
        const nota = parseFloat(prompt(`Digite a ${i + 1}ª nota:`));
        if (!isNaN(nota)) {
            notas.push(nota);
        } else {
            console.log("Por favor, insira uma nota válida.");
            return;
        }
    }

    const media = calcularMedia(notas);
    console.log(`A média aritmética das notas é: ${media}`);
}

main();
