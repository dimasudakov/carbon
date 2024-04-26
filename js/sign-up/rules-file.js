document.getElementById('sign-up__rules-agree').addEventListener('click', function() {
    var path = '/docs/rules.pdf';

    var link = document.createElement('a');
    link.href = path;
    link.download = 'rules.pdf';
    link.target = '_blank';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
});