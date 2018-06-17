(function () {
    'use strict';

    let $html = document.querySelector('html');
    let $menuButton = document.getElementById('openMenu');
    let $mainMenu = document.getElementById($menuButton.getAttribute('aria-controls'));

    $html.classList.remove('no-js');
    $html.classList.add('js');

    

    $menuButton.addEventListener('click', toggleMenu);

    function toggleMenu() {
        let ariaExpanded = !($menuButton.getAttribute('aria-expanded') === 'true');
        
        $menuButton.setAttribute('aria-expanded', ariaExpanded);
        $mainMenu.setAttribute('aria-expanded', ariaExpanded);

        $html.classList.toggle('menu-opened');
    }
})();