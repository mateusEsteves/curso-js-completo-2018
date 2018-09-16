var Aluno = require('./desafio-32');

class ListaAluno{
    constructor() {
        this.alunos = [];
    }

    addAluno(aluno) {
        this.alunos.push(aluno);
    }

    getAlunoByName(name) {
        return this.alunos.filter((aluno) => aluno.nome === name)[0];
    }

    getAlunosReprovados() {
        return this.alunos.filter(aluno => aluno.foiReprovadoPorFalta());
    }
}

let lista = new ListaAluno();

lista.addAluno(new Aluno('Mateus'));
lista.addAluno(new Aluno('Lucas'));
lista.addAluno(new Aluno('João'));

let mateus = lista.getAlunoByName('Mateus');

console.log(lista.getAlunosReprovados());