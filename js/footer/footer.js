const footer = document.getElementById('footer')

const footerContent = `
            <div class="map-wrapper">
                    <iframe class="map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aeb0117ca2bbcf9e9d3ee8018721fb2d1fec2a662b21b93d3b4998e912575d30d&amp;source=constructor" frameborder="0"></iframe>            
            </div>
<!--            <img src="assets/footer/map.png" alt="map" class="map"/>-->
            <div class="info">
                <div class="contacts">
                    <div class="title f-2" id="slide5_title_1"></div>
                    <ul>
                        <li>
                            <div class="logo-wrapper">
                                <img src="assets/footer/logo-user.png" alt="" class="logo abs-center" />
                            </div>
                            <div id="slide5_title_2" class="f-mx1"></div>
                        </li>
                        <li>
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
                    <h4 id="slide5_title_4" class="f-mx1"></h4>
                </div>
            </div>
`

const footerContentMobile = `
    <div class="contacts-m">
                <div class="title-m" id="slide5_title_1">
                    Контакты
                </div>
                <ul>
                    <li>
                        <div class="logo-wrapper">
                            <img src="assets/footer/logo-user.png" alt="" class="logo abs-center" />
                        </div>
                        <div id="slide5_title_2"></div>
                    </li>
                    <li>
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
                        @karb0n_ru
                    </li>
                </ul>
            </div>
            <div class="location-m">
                 <div class="map-wrapper">
                    <iframe class="map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aeb0117ca2bbcf9e9d3ee8018721fb2d1fec2a662b21b93d3b4998e912575d30d&amp;source=constructor" frameborder="0"></iframe>            
            </div>
                <div class="info-m">
                    <div class="title" id="slide5_title_3">Место проведения</div>
                    <h5 id="slide5_title_4">Институт геологии и нефтегазовых технологий, КФУ
                        Республика Татарстан, г. Казань, ул. Кремлевская 4/5</h5>
                </div>
            </div>
            <div class="footer-line"></div>
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
