class Aluno{
    
    constructor(nome) {
        this.nome = nome;
        this.faltas = 1;
    }

    static get faltasPermitidas() {
        return 0;
    }

    addFalta() {
        this.faltas += 1;
    }

    printNumFaltas() {
        console.log(`${this.nome} tem ${this.faltas} faltas.`);
    }

    foiReprovadoPorFalta() {
        return this.faltas > Aluno.faltasPermitidas;
    }
}

module.exports = Aluno;