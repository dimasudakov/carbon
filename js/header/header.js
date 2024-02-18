var carbonHeader = document.getElementById('carbon-header');

let navBarOpened = false

function updateHeader() {
    const bigHeader = `
    <img src="assets/logo.svg" alt="Логотип" class="header-logo-big">
    <a class="header-item" href="#">О конференции</a>
    <a class="header-item" href="#">Эксперты</a>
    <a class="header-item" href="#">Направления</a>
    <a class="header-item" href="#">Условия участия</a>
    <a class="header-item" href="#">Программа</a>
    <a class="header-item" href="#">Регистрация</a>
    <a class="header-item" href="#">Контакты</a>
    <a class="header-item" href="#">Ru/Eng</a>
    <div class="circle-container ml-50 circle-big">
        <img src="assets/circle.svg" alt="tg" class="circle-background">
        <img src="assets/tg-logo.svg" alt="tg" class="circle-logo">
    </div>
  `;

    const mobileHeader = `
    <div class="header-wrapper">
        <img src="assets/header/navbar-icon.svg" alt="gg" class="nav-button" />
        <img src="assets/logo.svg" alt="Лого" class="header-logo-small" />
    </div>
  `;

    closeNavigationBar()
    if (window.innerWidth < 1270) {
        carbonHeader.innerHTML = mobileHeader;
    } else {
        carbonHeader.innerHTML = bigHeader;
    }

    window.addEventListener('resize', updateHeader);
    var navButton = carbonHeader.querySelector('.nav-button');
    if (navButton) {
        navButton.addEventListener('click', function() {
            if(!navBarOpened) {
                showNavigationBar()
            } else {
                closeNavigationBar()
            }
        });
    }

    function showNavigationBar() {
        navBarOpened = true;
        const navBar = document.getElementById('mobile-nav-bar')
        if(navBar) {
            navBar.style.left = '0';
        }
    }
    
    function closeNavigationBar() {
        navBarOpened = false
        const navBar = document.getElementById('mobile-nav-bar')
        if(navBar) {
            navBar.style.left = '-100%';
        }
    }
}

updateHeader();
