function pell(N) {
    if (N === 0) {
        return 0;
    } else if (N === 1) {
        return 1;
    } else {
        return 2 * pell(N - 1) + pell(N - 2);
    }
}

let resultadoPell = pell(6);
console.log("O 6-ésimo número de Pell é:", resultadoPell);
