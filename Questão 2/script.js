function adicionarAluno(dicionarioAlunos, id, nome, nota) {
    dicionarioAlunos[id] = { nome: nome, nota: nota };
}

function buscarAlunoPorId(dicionarioAlunos, id) {
    return dicionarioAlunos[id] || null;
}

function calcularMediaNotas(dicionarioAlunos) {
    const ids = Object.keys(dicionarioAlunos);
    if (ids.length === 0) {
        return 0;
    }

    let totalNotas = 0;
    ids.forEach(id => {
        totalNotas += dicionarioAlunos[id].nota;
    });

    return totalNotas / ids.length;
}

// Exemplo de uso:
const alunos = {};

adicionarAluno(alunos, 1, "João", 8.5);
adicionarAluno(alunos, 2, "Maria", 7.9);
adicionarAluno(alunos, 3, "Pedro", 6.0);

const media = calcularMediaNotas(alunos);
console.log("Média das notas dos alunos:", media);
