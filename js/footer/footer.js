const footer = document.getElementById('footer')

const footerContent = `
            <div class="map-wrapper">
                <img src="assets/footer/map-wrapper.png" alt="" class="stroke-map">
                <div class="map-container">
                    <iframe class="yandex-map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A1e6db94c8bf59d5b0f84cb462f2b3a686705fa9c7c61ca96faebaaf6245312ce&amp;source=constructor"></iframe>
                </div>
            </div>
            <div class="info">
                <div class="contacts">
                    <div class="title f-2" id="slide5_title_1"></div>
                    <ul>
                        <li id="footer-user">
                            <div class="logo-wrapper">
                                <img src="assets/footer/logo-user.png" alt="" class="logo abs-center" />
                            </div>
                            <div id="slide5_title_2" class="f-mx1"></div>
                        </li>
                        <li id="footer-call">
                            <div class="logo-wrapper">
                                <img src="assets/footer/logo-call.png" alt="" class="logo abs-center" />
                            </div>
                            <div id="slide5_title_5" class="f-mx1"></div>
                        </li>
                        <li>
                            <div class="logo-wrapper">
                                <img src="assets/footer/logo-email.png" alt="" class="logo abs-center" />
                            </div>
                            <div class="f-mx1">karbon.conf@gmail.com</div>
                        </li>
                        <li>
                            <div class="logo-wrapper">
                                <img src="assets/footer/logo-tg.png" alt="" class="logo abs-center" />
                            </div>
                            <a href="https://t.me/karb0n_ru">
                                <div class="f-mx1">@karb0n_ru</div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="location">
                    <div class="title f-2" id="slide5_title_3"></div>
                    <h4 id="slide5_title_4" class="text f-mx1"></h4>
                </div>
            </div>
`

const footerContentMobile = `
    <div class="contacts-m">
        <div class="title-m f-2" id="slide5_title_1">
            Контакты
        </div>
        <ul>
            <li id="footer-user">
                <div class="logo-wrapper">
                    <img src="assets/footer/logo-user.png" alt="" class="logo abs-center" />
                </div>
                <div id="slide5_title_2"></div>
            </li>
            <li id="footer-call">
                <div class="logo-wrapper">
                    <img src="assets/footer/logo-call.png" alt="" class="logo abs-center" />
                </div>
                <div id="slide5_title_5"></div>
            </li>
            <li>
                <div class="logo-wrapper">
                    <img src="assets/footer/logo-email.png" alt="" class="logo abs-center" />
                </div>
                karbon.conf@gmail.com
            </li>
            <li>
                <div class="logo-wrapper">
                    <img src="assets/footer/logo-tg.png" alt="" class="logo abs-center" />
                </div>
                <a href="https://t.me/karb0n_ru" style="color: white;">
                     @karb0n_ru
                </a>
                
            </li>
        </ul>
    </div>
    <div class="location-m">
        <div class="info-m">
            <div class="title f-2" id="slide5_title_3">Место проведения</div>
            <h5 id="slide5_title_4">Институт геологии и нефтегазовых технологий, КФУ
                Республика Татарстан, г. Казань, ул. Кремлевская 4/5</h5>
        </div>
    </div>
    <div class="map-wrapper-m">
        <div class="map-container-m">
            <iframe class="yandex-map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A1e6db94c8bf59d5b0f84cb462f2b3a686705fa9c7c61ca96faebaaf6245312ce&amp;source=constructor"></iframe>
        </div>
    </div>
`


function updateFooter() {

    let prevWindowWidth = -1

    function update() {
        if (window.innerWidth <= 920 && (prevWindowWidth > 920 || prevWindowWidth === -1)) {
            footer.innerHTML = footerContentMobile
        } 
        if (window.innerWidth > 920 && (prevWindowWidth <= 920 || prevWindowWidth === -1)) {
            footer.innerHTML = footerContent
        }
        prevWindowWidth = window.innerWidth
    }
    
    update()
    window.addEventListener('resize', update)
}

updateFooter()
