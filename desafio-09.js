var Pessoa = (function () {
    'use strict';
    
    function _pessoa(nome, sobrenome) {
        let _nome = nome;
        let _sobrenome = sobrenome;

        this.getNomeCompleto = function () {
            return `${nome} ${sobrenome}`;
        };
    }

    return _pessoa;
})();

let pessoa1 = new Pessoa("Mateus", "Esteves");
let pessoa2 = new Pessoa("Fox", "McCloud");
let pessoa3 = new Pessoa("Wolf", "O'Donnell");

console.log(pessoa1.getNomeCompleto());
console.log(pessoa2.getNomeCompleto());
console.log(pessoa3.getNomeCompleto());