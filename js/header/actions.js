const scrollTarget = localStorage.getItem('scrollTarget');
if (scrollTarget) {
    const targetElement = document.getElementById(scrollTarget);
    if (targetElement) {
        targetElement.scrollIntoView({behavior: 'smooth'});
    }
    localStorage.removeItem('scrollTarget');
}

function scrollToTargetOnMainPage(targetId) {
    if(!isMainPage()) {
        localStorage.setItem('scrollTarget', targetId);
        window.location.href = 'index.html'
    } else {
        const target = document.getElementById(targetId)
        if (target) {
            target.scrollIntoView({behavior: 'smooth'});
        }
    }
}


const about = document.getElementById('navbar_title_2')
if (about) about.addEventListener('click', function () {
    const group2 = document.getElementById('group2');

    group2.scrollIntoView({behavior: 'smooth'});
});

const aboutMobile = document.getElementById('navbar_title_2_m')
if (aboutMobile) {
    aboutMobile.addEventListener('click', function () {
        scrollToTargetOnMainPage('group2')
    })
}

const orientation = document.getElementById('navbar_title_4')
if (orientation) orientation.addEventListener('click', function () {
    scrollToTargetOnMainPage('group4')
});

const orientationMobile = document.getElementById('navbar_title_4_m')
if (orientationMobile) orientationMobile.addEventListener('click', function () {
    scrollToTargetOnMainPage('group4')
});

const terms = document.getElementById('header_title_1')
if (terms) terms.addEventListener('click', function () {
    scrollToTargetOnMainPage('group5')

});

const termsMobile = document.getElementById('navbar_title_5_m')
if (termsMobile) termsMobile.addEventListener('click', function () {
    scrollToTargetOnMainPage('group5')
});

const program = document.getElementById('header_title_2')
if (program) program.addEventListener('click', function () {
    var path = '/docs/conference_program.pdf';

    var link = document.createElement('a');
    link.href = path;
    link.download = 'conference_program.pdf';
    link.target = '_blank';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
});

const programMobile = document.getElementById('navbar_title_6_m')
if (programMobile) programMobile.addEventListener('click', function () {
    var path = '/docs/conference_program.pdf';

    var link = document.createElement('a');
    link.href = path;
    link.download = 'conference_program.pdf';
    link.target = '_blank';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
});

const thesisMobile = document.getElementById('navbar_title_7_m')
if (thesisMobile) thesisMobile.addEventListener('click', function () {
    var path = '/docs/thesis_example.docx';

    var link = document.createElement('a');
    link.href = path;
    link.download = 'thesis_example.docx';
    link.target = '_blank';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
});

const tgLink = document.getElementById('tg-link')
if (tgLink) tgLink.addEventListener('click', function () {
    console.log("hello")
    location.href = "https://t.me/karb0n_ru"
})

const tgLinkMobile = document.getElementById('navbar_title_9_m')
if (tgLinkMobile) tgLinkMobile.addEventListener('click', function () {
    console.log("hello")
    location.href = "https://t.me/karb0n_ru"
})

const contacts = document.getElementById('navbar_title_10')
if (contacts) {
    contacts.addEventListener('click', function () {
        scrollToTargetOnMainPage('group6')
    })
}

const contactsMobile = document.getElementById('navbar_title_10_m')
if (contactsMobile) {
    contactsMobile.addEventListener('click', function () {
        scrollToTargetOnMainPage('group6')
    })
}


function isMainPage() {
    const currentURL = window.location.href;
    return currentURL.indexOf("index.html") !== -1 || currentURL.endsWith("/");
}