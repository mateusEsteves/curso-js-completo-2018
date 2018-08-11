function media() {
    let somatorio = Array.prototype.reduce.call(arguments, function (acumulador, currentValue) {
        return acumulador + currentValue; 
    }, 0);

    return somatorio / arguments.length;
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

Array.prototype.getMedia = function () {
    return media(...this);
}

String.prototype.replaceAll = function (searchValue, replaceValue) {
    let _string = this;
    
    do {
        _string = _string.replace(searchValue, replaceValue);
    } while (_string.includes(searchValue));
    
    return _string;
}

console.log('Média simples:', media(10, 24, 55, 90));
console.log('Média arredondada:', mediaArredondada(987, 240, 282, 134.23));
console.log('Sortear:', sortear(10));

console.log('---------------------');

console.log('Aluno Aprovado:', aprovadoOuReprovado(90, 45, 80, 75, 99, 78));
console.log('Aluno Reprovado (1 nota zero):', aprovadoOuReprovado(0, 45, 80, 75, 99, 78));
console.log('Aluno Reprovado (abaixo de 60):', aprovadoOuReprovado(10, 45, 20, 35, 2, 32));

console.log('---------------------');

console.log('Array.prototype.getMedia(): ', [1, 2, 3, 4].getMedia());

console.log('---------------------');

console.log('String.prototype.replaceAll(): ', 'aabbccddaattssjjaa'.replaceAll('aa', '##'));