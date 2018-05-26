function media() {
    let somatorio = 0.0;
    
    for (let i = 0; i < arguments.length; i++){
        somatorio += arguments[i];
    }

    let media = somatorio / arguments.length;
    return media;
}
