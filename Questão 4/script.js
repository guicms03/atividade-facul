function tribonacci(N) {
    if (N === 0) {
        return 0;
    } else if (N === 1 || N === 2) {
        return 1;
    } else {
        return tribonacci(N - 1) + tribonacci(N - 2) + tribonacci(N - 3);
    }
}

let resultadoTribonacci = tribonacci(6);
console.log("O 6-ésimo número da sequência de Tribonacci é:", resultadoTribonacci);
