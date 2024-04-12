function potencia(x, k) {
    if (k === 0) {
        return 1;
    } else if (k === 1) {
        return x;
    } else {
        return x * potencia(x, k - 1);
    }
}

let resultadoPotencia = potencia(2, 3);
console.log("O resultado de 2 elevado a 3 é:", resultadoPotencia);
