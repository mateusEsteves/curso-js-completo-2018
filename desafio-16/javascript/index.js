(function () {
    'use strict';

    let $html = document.querySelector('html');
    let $menuButton = document.getElementById('openMenu');

    $html.classList.remove('no-js');
    $html.classList.add('js');

    $menuButton.addEventListener('click', toggleMenu);

    function toggleMenu() {
        $html.classList.toggle('menu-opened');
    }
})();