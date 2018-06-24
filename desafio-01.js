function media() {
    let somatorio = 0.0;
    
    for (let i = 0; i < arguments.length; i++){
        somatorio += arguments[i];
    }

    let media = somatorio / arguments.length;
    return media;
}

function mediaArredondada() {
    return media(...arguments).toFixed(2);
}

function sortear(numero) {
    return Math.floor(Math.random() * numero);
}

function aprovadoOuReprovado() {
    let valores = Array.from(arguments);
    let reprovado = valores.some(valor => valor === 0) || mediaArredondada(...arguments) < 60;

    return reprovado ? 'Reprovado' : 'Aprovado';
}

console.log('Média seimples:', media(10, 24, 55, 90));
console.log('Média arredondada:', mediaArredondada(987, 240, 282, 134.23));
console.log('Sortear:', sortear(10));

console.log('Aluno Aprovado:', aprovadoOuReprovado(90, 45, 80, 75, 99, 78));
console.log('Aluno Reprovado (1 nota zero):', aprovadoOuReprovado(0, 45, 80, 75, 99, 78));
console.log('Aluno Reprovado (abaixo de 60):', aprovadoOuReprovado(10, 45, 20, 35, 2, 32));
