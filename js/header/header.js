var carbonHeader = document.getElementById('carbon-header');

let navBarOpened = false

let prevWindowWidth = -1

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
    <a class="header-item" id="langButton">Ru/Eng</a>
    <div class="circle-container ml-50 circle-big">
        <img src="assets/circle.svg" alt="tg" class="circle-background">
        <img src="assets/tg-logo.svg" alt="tg" class="circle-logo">
    </div>
  `;

    const mobileHeader = `
    <div class="header-wrapper">
        <img src="assets/header/navbar-icon.svg" alt="gg" class="nav-button" id="navButton" />
        <img src="assets/logo.svg" alt="Лого" class="header-logo-small" />
    </div>
  `;

    closeNavigationBar()
    if (window.innerWidth < 1270 && (prevWindowWidth >= 1270 || prevWindowWidth === -1)) {
        carbonHeader.innerHTML = mobileHeader;
        const navButton = carbonHeader.querySelector('.nav-button');
        if (navButton) {
            navButton.addEventListener('click', handleNavBarClick);
        }
    }
    if (window.innerWidth >= 1270 && (prevWindowWidth < 1270 || prevWindowWidth === -1)) {
        carbonHeader.innerHTML = bigHeader;
        removeEventListener('click', handleNavBarClick)
    }
    
    prevWindowWidth = window.innerWidth
    window.addEventListener('resize', updateHeader);

    function handleNavBarClick() {
        if (!navBarOpened) {
            showNavigationBar()
        } else {
            closeNavigationBar()
        }
    }

    function showNavigationBar() {
        navBarOpened = true;
        const navBar = document.getElementById('mobile-nav-bar')
        if (navBar) {
            navBar.style.left = '0';
        }
        const navButton = document.getElementById('navButton')
        if (navButton) {
            navButton.src = "assets/header/close-navbar-icon.svg"
            navButton.style.width = '20px';
            navButton.style.height = '20px';
        }

        const navbarActions = document.querySelectorAll('.navbar-action');
        navbarActions.forEach(navbarAction => {
            navbarAction.addEventListener('click', closeNavigationBar);
        });
    }

    function closeNavigationBar() {
        navBarOpened = false
        const navBar = document.getElementById('mobile-nav-bar')
        if (navBar) {
            navBar.style.left = '-100%';
        }
        const navButton = document.getElementById('navButton')
        if (navButton) {
            navButton.src = "assets/header/navbar-icon.svg"
            navButton.style.width = '30px';
            navButton.style.height = '30px';
        }
        const navbarActions = document.querySelectorAll('.navbar-action');
        navbarActions.forEach(navbarAction => {
            removeEventListener('click', closeNavigationBar)
        });
    }
}

updateHeader();
