document.getElementById('parallax').addEventListener('scroll', function () {
    var scrollPosition = this.scrollTop;

    var rotationShell = (scrollPosition * 0.04) + 'deg';

    document.querySelector('.shell2-background').style.transform = 'rotate(' + rotationShell + ')';

    if (this.scrollTop > 1750) {
        let addWidth = (this.scrollTop - 1750) * 0.1
        let left = (this.scrollTop - 1750) / 2000 * 15
        document.querySelector('.microscope-background').style.left = 15 - left + '%';
        document.querySelector('.microscope-background').style.width = 400 + addWidth + 'px';
    }
});