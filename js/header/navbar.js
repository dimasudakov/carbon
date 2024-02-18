const navbar = document.getElementById('mobile-nav-bar')

const content = `
<div class="content">
        <ul>
            <li>
                Главная
                <img src="assets/header/home.svg" alt="ar" class="li-logo" />
            </li>
            <li class="ml-30">
                О конференции
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
            <li class="ml-30">
                Эксперты
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
            <li class="ml-30">
                Направления
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
            <li class="ml-30">
                Регламент участия
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
            <li class="ml-30">
                Программа конференции
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
            <li class="ml-30">
                Шаблон оформления тезисов
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
            <li class="ml-30">
                Стать участником
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
            <li class="ml-30">
                <div class="circle-container circle-small mr-10">
                    <img src="assets/circle.svg" alt="tg" class="circle-background">
                    <img src="assets/tg-logo.svg" alt="tg" class="circle-logo">
                </div>
                Присоединяйся к нам
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
            <li class="pl-30">
                Контакты
                <img src="assets/header/arrow-right.svg" alt="ar" class="li-logo" />
            </li>
        </ul>
        <div class="lang ml-30">
            Ru / Eng
        </div>
    </div>
`

navbar.innerHTML = content