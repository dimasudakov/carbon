let langButton = document.getElementById('langButton')

let currentLang = localStorage.getItem("languageKarbon") || "Ru";
let translations

langButton.addEventListener('click', handleChangeLanguage)

function handleChangeLanguage() {
    if (currentLang === "Ru") {
        currentLang = "En"
        localStorage.setItem("languageKarbon", "En");
        changePageLang()
    } else {
        currentLang = "Ru"
        localStorage.setItem("languageKarbon", "Ru");
        changePageLang()
    }
}

function changePageLang() {
    if (!translations) {
        loadTranslations()
    }
    for (const key in translations[currentLang]) {
        const el = document.getElementById(key)
        if (el) {
            el.innerHTML = translations[currentLang][key];
        }
    }

    if (currentLang === "En") {
        if (document.getElementById('footer-user')) {
            document.getElementById('footer-user').style.display = 'none';
        }
        if (document.getElementById('footer-call')) {
            document.getElementById('footer-call').style.display = 'none';
        }

        if (document.getElementById('ru-lang-header')) {
            document.getElementById('ru-lang-header').style.fontWeight = 'normal'
        }
        if (document.getElementById('en-lang-header')) {
            document.getElementById('en-lang-header').style.fontWeight = 'bold'
        }
    } else {
        if (document.getElementById('footer-user')) {
            document.getElementById('footer-user').style.display = 'flex';
        }
        if (document.getElementById('footer-call')) {
            document.getElementById('footer-call').style.display = 'flex';
        }

        if (document.getElementById('ru-lang-header')) {
            document.getElementById('ru-lang-header').style.fontWeight = 'bold'
        }
        if (document.getElementById('en-lang-header')) {
            document.getElementById('en-lang-header').style.fontWeight = 'normal'
        }
    }

    changePicture("tag1", "assets/slide2/", "-tag1.png")
    changePicture("tag2", "assets/slide2/", "-tag2.png")
    changePicture("tag3", "assets/slide2/", "-tag3.png")
    changePicture("tag4", "assets/slide2/", "-tag4.png")

    changePicture("kpfu", "assets/loop-strip/", "-kpfu.png")
    changePicture("planet", "assets/loop-strip/", "-planet.png")
    changePicture("tatneft", "assets/loop-strip/", "-tatneft.png")
    changePicture("gasprom", "assets/loop-strip/", "-gasprom.png")
    changePicture("rosneft", "assets/loop-strip/", "-rosneft.png")
    changePicture("georesources", "assets/loop-strip/", "-georesources.png")

    changePicture("kpfu2", "assets/loop-strip/", "-kpfu.png")
    changePicture("planet2", "assets/loop-strip/", "-planet.png")
    changePicture("tatneft2", "assets/loop-strip/", "-tatneft.png")
    changePicture("gasprom2", "assets/loop-strip/", "-gasprom.png")
    changePicture("rosneft2", "assets/loop-strip/", "-rosneft.png")
    changePicture("georesources2", "assets/loop-strip/", "-georesources.png")

    changePicture("header-logo", "assets/header/", "-logo.svg")
}

function loadTranslations() {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', 'translations.json', false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            translations = JSON.parse(xhr.responseText);
        }
    };
    xhr.send(null);
}

changePageLang()


// для мобильной версии и компьютерной используются разные кнопки с одинаковым id
addEventListener('resize', () => {
    removeEventListener('click', handleChangeLanguage)
    langButton = document.getElementById('langButton')
    langButton.addEventListener('click', handleChangeLanguage)
})

function changePicture(id, pathPrefix, name) {
    if(document.getElementById(id)) {
        document.getElementById(id).src = pathPrefix + currentLang.toLowerCase() + name
    }
}