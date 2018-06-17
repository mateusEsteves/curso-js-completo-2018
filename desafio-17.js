(function () {
    'use strict';

    let nome = 'Mateus Esteves da Silva';

    function formatName(name) {
        let lastNameStartIndex = name.lastIndexOf(' ');

        if (lastNameStartIndex > 0) {
            let firstPartOfTheName = name.substring(0, lastNameStartIndex);
            let lastPartOfTheName = name.substring(lastNameStartIndex + 1, name.length);
            return `${lastPartOfTheName}, ${firstPartOfTheName}`;
        }

        return name;
    }

    console.log(formatName(nome));
})();