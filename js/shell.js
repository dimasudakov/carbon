const shellTop = document.querySelector('.shell-top')
const shellBottom = document.querySelector('.shell-bottom')
const group5 = document.getElementById('group5')
const group6 = document.getElementById('group6')

document.getElementById('parallax').addEventListener('scroll', function() {
    var scrollPosition = this.scrollTop; 
    var svgSize = 400 - scrollPosition * 0.3;
    
    var right = -80 + (400 - svgSize) / 2 * 0.6;
    var rotation = (scrollPosition * 0.2) + 'deg';

    if (svgSize <= 10) {
        shellTop.style.display = 'none'
    } else {
        shellTop.style.display = ''
    }
    
    // 660 -> 860: opacity 1 -> 0
    if(this.scrollTop > 660) {
        const newOpacity = 1.0 - (this.scrollTop - 660.0) / 200.0
        shellTop.style.opacity = newOpacity + ''
    } else {
        shellTop.style.opacity = '1'
    }

    shellTop.style.width = svgSize + 'px';
    shellTop.style.right = right + 'px';
    shellTop.style.transform = 'rotate(' + rotation + ')';
    shellTop.style.top = 100 + this.scrollTop + 'px';

    const group5Top = group5.offsetTop;
    const group6Bottom = group6.offsetTop + group6.offsetHeight;
    const curWindowBottom = this.scrollTop + window.innerHeight
    const dist = group6Bottom - group5Top + 100

    if(group5Top < curWindowBottom && curWindowBottom < group6Bottom + 100) {
        shellBottom.style.width = 20 + (curWindowBottom - group5Top) / dist * 30 + '%'
        shellBottom.style.top = -4 + (curWindowBottom - group5Top) / dist * 124 + '%'
    }
    if(group5Top < curWindowBottom + 100 && curWindowBottom < group6Bottom + 100) {
        var rotationBottom = -90 + (curWindowBottom - group5Top) / dist * 135 + 'deg';
        shellBottom.style.transform = 'rotate(' + rotationBottom + ')';
    }
});


// shell-bottom:
// width: 20% -> 50% (min-width: 150px)
// top: -4% -> 120%
