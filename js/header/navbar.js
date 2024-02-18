const navbar = document.getElementById('mobile-nav-bar')

const content = `
<div class="content">
        <ul>
            <li class="navbar-action">
                Главная
                <img src="assets/header/home.svg" alt="ar" class="li-logo" />
            </li>
            <li class="ml-30 navbar-action">
                О конференции
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
            <li class="ml-30 navbar-action">
                Эксперты
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
            <li class="ml-30 navbar-action">
                Направления
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
            <li class="ml-30 navbar-action">
                Регламент участия
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
            <li class="ml-30 navbar-action">
                Программа конференции
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
            <li class="ml-30 navbar-action">
                Шаблон оформления тезисов
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
            <li class="ml-30 navbar-action">
                Стать участником
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
            <li class="ml-30 navbar-action">
                <div class="circle-container circle-small mr-10">
                    <img src="assets/circle.svg" alt="tg" class="circle-background">
                    <img src="assets/tg-logo.svg" alt="tg" class="circle-logo">
                </div>
                Присоединяйся к нам
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
            <li class="pl-30 navbar-action">
                Контакты
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
        </ul>
        <div class="lang ml-30 navbar-action" id="langButton">
            Ru / Eng
        </div>
    </div>
`

navbar.innerHTML = content

