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

console.log(media(10, 24, 55, 90));
console.log(mediaArredondada(987, 240, 282, 134.23));
console.log(sortear(10));
