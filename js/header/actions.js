const about = document.getElementById('navbar_title_2')
if (about) about.addEventListener('click', function () {
    const group2 = document.getElementById('group2');

    group2.scrollIntoView({behavior: 'smooth'});
});

const aboutMobile = document.getElementById('navbar_title_2_m')
if (aboutMobile) {
    aboutMobile.addEventListener('click', function () {
        const group2 = document.getElementById('group2');

        group2.scrollIntoView({ behavior: 'smooth'});
    });
}

const orientation = document.getElementById('navbar_title_4')
if (orientation) orientation.addEventListener('click', function () {
    const group4 = document.getElementById('group4');

    group4.scrollIntoView({behavior: 'smooth'});
});

const orientationMobile = document.getElementById('navbar_title_4_m')
if (orientationMobile) orientationMobile.addEventListener('click', function () {
    const group4 = document.getElementById('group4');

    group4.scrollIntoView({behavior: 'smooth'});
});

const terms = document.getElementById('header_title_1')
if (terms) terms.addEventListener('click', function () {
    const group5 = document.getElementById('group5');

    group5.scrollIntoView({behavior: 'smooth'});
});

const termsMobile = document.getElementById('navbar_title_5_m')
if (termsMobile) termsMobile.addEventListener('click', function () {
    const group5 = document.getElementById('group5');

    group5.scrollIntoView({behavior: 'smooth'});
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

const signUpMobile = document.getElementById('navbar_title_8_m')
if (signUpMobile) signUpMobile.addEventListener('click', function () {
    var url = 'https://docs.google.com/forms/d/e/1FAIpQLScjIwM_fqLaUyaJCpZesMHfJPYK167f-lKuGipJBYgEXpsh0Q/viewform?usp=sf_link';

    window.location.href = url;
});

const thesisMobile = document.getElementById('navbar_title_7_m')
if(thesisMobile) thesisMobile.addEventListener('click', function() {
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
if(tgLink) tgLink.addEventListener('click', function() {
    console.log("hello")
    const path = "https://t.me/karb0n_ru"

    location.href = path
})

const tgLinkMobile = document.getElementById('navbar_title_9_m')
if(tgLinkMobile) tgLinkMobile.addEventListener('click', function() {
    console.log("hello")
    const path = "https://t.me/karb0n_ru"
    
    location.href = path
})

const contacts = document.getElementById('navbar_title_10')
if(contacts) {
    contacts.addEventListener('click', function() {
        const group6 = document.getElementById('group6');

        group6.scrollIntoView({behavior: 'smooth'});
    })
}

const contactsMobile = document.getElementById('navbar_title_10_m')
if(contactsMobile) {
    contactsMobile.addEventListener('click', function() {
        const group6 = document.getElementById('group6');

        group6.scrollIntoView({behavior: 'smooth'});
    })
}
