
document.getElementById('slide1_action_1').addEventListener('click', function() {
    const group2 = document.getElementById('group2');

    group2.scrollIntoView({behavior: 'smooth'});
});

document.getElementById('slide1_action_2').addEventListener('click', function() {
    var path = '/docs/conference_program.pdf';

    var link = document.createElement('a');
    link.href = path;
    link.download = 'conference_program.pdf';
    link.target = '_blank';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
});

document.getElementById('slide1_action_3').addEventListener('click', function() {
    var url = 'https://docs.google.com/forms/d/e/1FAIpQLSeZXqS5a7rVZkholegRZjV327MVUC-uMne8scGBvhg4P7pLRg/viewform';

    window.location.href = url;
});

document.getElementById('slide1_action_4').addEventListener('click', function() {
    var url = 'https://t.me/karb0n_ru';

    window.location.href = url;
});


document.getElementById('slide1_action_5').addEventListener('click', function() {
    var path = '/docs/thesis_example.docx';

    var link = document.createElement('a');
    link.href = path;
    link.download = 'thesis_example.docx';
    link.target = '_blank';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
});

document.getElementById('download-doc').addEventListener('click', function() {
    var path = '/docs/reglament.pdf';

    var link = document.createElement('a');
    link.href = path;
    link.download = 'reglament.pdf';
    link.target = '_blank';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
});


