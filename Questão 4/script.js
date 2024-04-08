let populacaoA = 80000;
let populacaoB = 200000;
const taxaCrescimentoA = 0.03; // 3%
const taxaCrescimentoB = 0.015; // 1.5%
let anos = 0;

while (populacaoA <= populacaoB) {
    populacaoA *= (1 + taxaCrescimentoA);
    populacaoB *= (1 + taxaCrescimentoB);
    anos++;
}

console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse a população do país B.`);
