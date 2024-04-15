class Aluno {
    constructor(id, nome, nota) {
        this.id = id;
        this.nome = nome;
        this.nota = nota;
    }
}

function adicionarAluno(listaAlunos, id, nome, nota) {
    const aluno = new Aluno(id, nome, nota);
    listaAlunos.push(aluno);
}

function buscarAlunoPorId(listaAlunos, id) {
    return listaAlunos.find(aluno => aluno.id === id) || null;
}

function calcularMediaNotas(listaAlunos) {
    const quantidadeAlunos = listaAlunos.length;
    if (quantidadeAlunos === 0) {
        return 0;
    }

    const totalNotas = listaAlunos.reduce((total, aluno) => total + aluno.nota, 0);
    return totalNotas / quantidadeAlunos;
}

// Exemplo de uso:
const alunos = [];

adicionarAluno(alunos, 1, "João", 8.5);
adicionarAluno(alunos, 2, "Maria", 7.9);
adicionarAluno(alunos, 3, "Pedro", 6.0);

const media = calcularMediaNotas(alunos);
console.log("Média das notas dos alunos:", media);

