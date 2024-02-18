const footer = document.getElementById('footer')

const footerContent = `
            <img src="assets/footer/map.png" alt="map" class="map"/>
            <div class="info">
                <div class="contacts">
                    <div class="title">Контакты</div>
                    <ul>
                        <li>
                            <div class="logo-wrapper">
                                <img src="assets/footer/logo-user.png" alt="user" class="logo abs-center" />
                            </div>
                            Семенова Алия Аликовна
                        </li>
                        <li>
                            <div class="logo-wrapper">
                                <img src="assets/footer/logo-call.png" alt="user" class="logo abs-center" />
                            </div>
                            +7 (986) 712-94-93
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
                    <div class="title">Место проведения</div>
                    <h4>Институт геологии и нефтегазовых технологий, КФУ
                        Республика Татарстан, г. Казань, ул. Кремлевская 4/5</h4>
                </div>
            </div>
`

const footerContentMobile = `
    <div class="contacts-m">
                <div class="title-m">
                    Контакты
                </div>
                <ul>
                    <li>
                        <div class="logo-wrapper">
                            <img src="assets/footer/logo-user.png" alt="user" class="logo abs-center" />
                        </div>
                        Семенова Алия Аликовна
                    </li>
                    <li>
                        <div class="logo-wrapper">
                            <img src="assets/footer/logo-call.png" alt="user" class="logo abs-center" />
                        </div>
                        +7 (986) 712-94-93
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
                    <div class="title">Место проведения</div>
                    <h5>Институт геологии и нефтегазовых технологий, КФУ
                        Республика Татарстан, г. Казань, ул. Кремлевская 4/5</h5>
                </div>
            </div>
            <div class="footer-line"></div>
`

function updateFooter() {
    if(window.innerWidth <= 920) {
        footer.innerHTML = footerContentMobile
    } else {
        footer.innerHTML = footerContent
    }
    
    window.addEventListener('resize', updateFooter)
}

updateFooter()
