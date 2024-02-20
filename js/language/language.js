let langButton = document.getElementById('langButton')

let currentLang = localStorage.getItem("language") || "Ru";
let translations

langButton.addEventListener('click', handleChangeLanguage)

function handleChangeLanguage() {
    if(currentLang === "Ru") {
        // навремя заблокировал англ язык
        currentLang = "Ru"
        localStorage.setItem("language", "Ru");
        changePageLang()
    } else {
        currentLang = "Ru"
        localStorage.setItem("language", "Ru");
        changePageLang()
    }
}

function changePageLang() {
    if (!translations) {
        loadTranslations()
    }
    for (const key in translations[currentLang]) {
        const el = document.getElementById(key)
        if(el) {
            el.innerText = translations[currentLang][key];
        }
    }
    
    document.getElementById('tag1').src = "assets/slide2/" + currentLang.toLowerCase() + "-tag1.png"
    document.getElementById('tag2').src = "assets/slide2/" + currentLang.toLowerCase() + "-tag2.png"
    document.getElementById('tag3').src = "assets/slide2/" + currentLang.toLowerCase() + "-tag3.png"
    document.getElementById('tag4').src = "assets/slide2/" + currentLang.toLowerCase() + "-tag4.png"
    
    document.getElementById('kpfu').src = "assets/loop-strip/" + currentLang.toLowerCase() + "-kpfu.svg"
    document.getElementById('planet').src = "assets/loop-strip/" + currentLang.toLowerCase() + "-planet.svg"
    document.getElementById('tatneft').src = "assets/loop-strip/" + currentLang.toLowerCase() + "-tatneft.svg"
    document.getElementById('gasprom').src = "assets/loop-strip/" + currentLang.toLowerCase() + "-gasprom.svg"
    document.getElementById('rosneft').src = "assets/loop-strip/" + currentLang.toLowerCase() + "-rosneft.svg"
    document.getElementById('georesources').src = "assets/loop-strip/" + currentLang.toLowerCase() + "-georesources.svg"

    document.getElementById('kpfu2').src = "assets/loop-strip/" + currentLang.toLowerCase() + "-kpfu.svg"
    document.getElementById('planet2').src = "assets/loop-strip/" + currentLang.toLowerCase() + "-planet.svg"
    document.getElementById('tatneft2').src = "assets/loop-strip/" + currentLang.toLowerCase() + "-tatneft.svg"
    document.getElementById('gasprom2').src = "assets/loop-strip/" + currentLang.toLowerCase() + "-gasprom.svg"
    document.getElementById('rosneft2').src = "assets/loop-strip/" + currentLang.toLowerCase() + "-rosneft.svg"
    document.getElementById('georesources2').src = "assets/loop-strip/" + currentLang.toLowerCase() + "-georesources.svg"
    
    document.getElementById('header-logo').src = "assets/header/" + currentLang.toLowerCase() + "-logo.svg"
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
