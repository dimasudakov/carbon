document.getElementById('parallax').addEventListener('scroll', function () {
    const scrollPosition = this.scrollTop;

    const rotationShell = (scrollPosition * 0.04) + 'deg';

    document.querySelector('.shell2-background').style.transform = 'rotate(' + rotationShell + ')';

    if (this.scrollTop > group2.offsetTop) {
        const part = (this.scrollTop - group2.offsetTop) / (group5.offsetTop + group5.offsetHeight - group2.offsetTop)
        let addWidth = part * 10
        let left = part * 15
        document.querySelector('.microscope-background').style.left = 15 - left + '%';
        document.querySelector('.microscope-background').style.width = 30 + addWidth + 'vw';
    }
});