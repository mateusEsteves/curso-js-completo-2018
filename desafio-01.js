function media() {
    let somatorio = 0.0;
    
    for (let i = 0; i < arguments.length; i++){
        somatorio += arguments[i];
    }

    let media = somatorio / arguments.length;
    console.log(media);
}

media(1, 2, 3, 4, 5);
media(1, 2, 3, 4, 5, 6, 7, 8, 9);