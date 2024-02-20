const footer = document.getElementById('footer')

const footerContent = `
            <img src="assets/footer/map.png" alt="map" class="map"/>
            <div class="info">
                <div class="contacts">
                    <div class="title" id="slide5_title_1"></div>
                    <ul>
                        <li>
                            <div class="logo-wrapper">
                                <img src="assets/footer/logo-user.png" alt="user" class="logo abs-center" />
                            </div>
                            <div id="slide5_title_2"></div>
                        </li>
                        <li>
                            <div class="logo-wrapper">
                                <img src="assets/footer/logo-call.png" alt="user" class="logo abs-center" />
                            </div>
                            <div id="slide5_title_5"></div>
                        </li>
                        <li>
                            <div class="logo-wrapper">
                                <img src="assets/footer/logo-email.png" alt="user" class="logo abs-center" />
                            </div>
                            karbon.conf@gmail.com
                        </li>
                        <li>
                            <div class="logo-wrapper">
                                <img src="assets/footer/logo-tg.png" alt="user" class="logo abs-center" />
                            </div>
                            @karb0n_ru
                        </li>
                    </ul>
                </div>
                <div class="location">
                    <div class="title" id="slide5_title_3"></div>
                    <h4 id="slide5_title_4"></h4>
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
                            <img src="assets/footer/logo-user.png" alt="user" class="logo abs-center" />
                        </div>
                        <div id="slide5_title_2"></div>
                    </li>
                    <li>
                        <div class="logo-wrapper">
                            <img src="assets/footer/logo-call.png" alt="user" class="logo abs-center" />
                        </div>
                        <div id="slide5_title_5"></div>
                    </li>
                    <li>
                        <div class="logo-wrapper">
                            <img src="assets/footer/logo-email.png" alt="user" class="logo abs-center" />
                        </div>
                        karbon.conf@gmail.com
                    </li>
                    <li>
                        <div class="logo-wrapper">
                            <img src="assets/footer/logo-tg.png" alt="user" class="logo abs-center" />
                        </div>
                        @karb0n_ru
                    </li>
                </ul>
            </div>
            <div class="location-m">
                <img src="assets/footer/map.png" alt="map" class="map" />
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
