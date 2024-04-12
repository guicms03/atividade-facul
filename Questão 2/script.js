function fatorial(N) {
    if (N === 1) {
        return 1;
    } else {
        return N * fatorial(N - 1);
    }
}

let resultadoFatorial = fatorial(5);
console.log("O fatorial de 5 é:", resultadoFatorial);
