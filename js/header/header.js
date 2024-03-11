var carbonHeader = document.getElementById('carbon-header');

let navBarOpened = false

let prevWindowWidth = -1

function updateHeader() {
    const bigHeader = `
        <img src="" alt="" class="header-logo-big" id="header-logo">
        <div class="header-btn-wrapper">
            <a class="header-item f-mx1" href="#" id="navbar_title_2"></a>
        </div>
        <div class="header-btn-wrapper">
            <a class="header-item f-mx1" href="#" id="navbar_title_3"></a>
        </div>
        <div class="header-btn-wrapper">
            <a class="header-item f-mx1" href="#" id="navbar_title_4"></a>
        </div>
        <div class="header-btn-wrapper">
            <a class="header-item f-mx1" href="#" id="header_title_1"></a>
        </div>
        <div class="header-btn-wrapper">
            <a class="header-item f-mx1" href="#" id="header_title_2"></a>
        </div>
        <div class="header-btn-wrapper">
            <a class="header-item f-mx1 gradient-header relative" href="https://docs.google.com/forms/d/e/1FAIpQLScjIwM_fqLaUyaJCpZesMHfJPYK167f-lKuGipJBYgEXpsh0Q/viewform?usp=sf_link" id="header_title_3"></a>
        </div>
        <div class="header-btn-wrapper">
            <a class="header-item f-mx1" href="#" id="navbar_title_10"></a>
        </div>
        <div class="header-btn-wrapper">
            <a class="header-item f-mx1" id="langButton">
                <span id="ru-lang-header" style="font-weight: bold;">Ru</span>
                /
                <span id="en-lang-header" style="font-weight: bold;">Eng</span>
            </a>
        </div>
        <div class="circle-container ml-50 circle-big">
            <img src="assets/circle.svg" alt="tg" class="circle-background">
            <img src="assets/tg-logo.svg" alt="tg" class="circle-logo" id="tg-link">
        </div>
  `;

    const mobileHeader = `
    <div class="header-wrapper">
        <img src="assets/header/navbar-icon.svg" alt="" class="nav-button" id="navButton" />
        <img src="" alt="" class="header-logo-small" id="header-logo" />
    </div>
  `;

    closeNavigationBar()
    if (window.innerWidth < 1270 && (prevWindowWidth >= 1270 || prevWindowWidth === -1)) {
        if(prevWindowWidth !== -1) {
            location.reload()
        }
        carbonHeader.innerHTML = mobileHeader;
        const navButton = carbonHeader.querySelector('.nav-button');
        if (navButton) {
            navButton.addEventListener('click', handleNavBarClick);
        }
    }
    if (window.innerWidth >= 1270 && (prevWindowWidth < 1270 || prevWindowWidth === -1)) {
        if(prevWindowWidth !== -1) {
            location.reload()
        }
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
