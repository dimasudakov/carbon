const navbar = document.getElementById('mobile-nav-bar')

const content = `
<div class="content">
        <ul>
            <li class="navbar-action" id="navbar_title_1_m">
                
                <img src="assets/header/home.svg" alt="ar" class="li-logo" />
            </li>
            <li class="ml-30 navbar-action" id="navbar_title_2_m">
                
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
            <li class="ml-30 navbar-action" id="navbar_title_3_m">
                
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
            <li class="ml-30 navbar-action" id="navbar_title_4_m">
                
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
            <li class="ml-30 navbar-action" id="navbar_title_5_m">
                
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
            <li class="ml-30 navbar-action" id="navbar_title_6_m">
                
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
            <li class="ml-30 navbar-action" id="navbar_title_7_m">
                
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
            <li class="ml-30 navbar-action" id="navbar_title_8_m">
                
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
            <li class="ml-30 navbar-action">
                <div class="circle-container circle-small mr-10">
                    <img src="assets/circle.svg" alt="tg" class="circle-background">
                    <img src="assets/tg-logo.svg" alt="tg" class="circle-logo">
                </div>
                <div id="navbar_title_9_m"></div>
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
            <li class="pl-30 navbar-action" id="navbar_title_10_m">
                
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
        </ul>
        <div class="lang ml-30 navbar-action" id="langButton">
            Ru / Eng
        </div>
    </div>
`

navbar.innerHTML = content

