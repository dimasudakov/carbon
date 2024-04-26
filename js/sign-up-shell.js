const shellTop = document.querySelector('.shell-top')
const group1 = document.getElementById('group1')

document.getElementById('parallax').addEventListener('scroll', function() {
    const shellTopPathLen = group1.offsetTop + group1.offsetHeight * 0.6

    var scrollPosition = this.scrollTop;
    var svgSize = 25 - (scrollPosition / shellTopPathLen) * 20;
    var rotation = (scrollPosition / group1.offsetHeight * 180) + 'deg';

    if (svgSize <= 1) {
        shellTop.style.display = 'none'
    } else {
        shellTop.style.display = ''
    }


    if(this.scrollTop > group1.offsetTop) {
        const newOpacity = 1.0 - (this.scrollTop - group1.offsetTop - 0.6 * group1.offsetHeight) / (0.4 * group1.offsetHeight)
        shellTop.style.opacity = newOpacity + ''
    } else {
        shellTop.style.opacity = '1'
    }

    shellTop.style.width = svgSize + 'vw';
    shellTop.style.transform = 'rotate(' + rotation + ')';
    shellTop.style.top = 100 + this.scrollTop + 'px';
});


// shell-bottom:
// width: 20% -> 50% (min-width: 150px)
// top: -4% -> 120%
