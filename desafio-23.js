function dateToBrazilianFormat(dateObject) {
    let dia = dateObject.getDate() < 10 ? '0' + dateObject.getDate() : dateObject.getDate();
    let mes = (dateObject.getMonth() + 1) < 10 ? '0' + (dateObject.getMonth() + 1) : dateObject.getMonth() + 1;

    return `${dia}/${mes}/${dateObject.getFullYear()}`;
}

console.log(dateToBrazilianFormat(new Date()));