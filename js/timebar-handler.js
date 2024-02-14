
window.addEventListener('load', function() {
    const timebarBig = document.getElementById('timebar-big');
    const timebarSmall = document.getElementById('timebar-small');

    function updateScript() {
        if (window.innerWidth <= 620) {
            timebarBig.style.display = 'none'
            timebarSmall.style.display = ''
        } else {
            timebarBig.style.display = ''
            timebarSmall.style.display = 'none'
        }
    }

    updateScript();
    window.addEventListener('resize', updateScript);
});