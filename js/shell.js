const shellTop = document.querySelector('.shell-top')
const shellBottom = document.querySelector('.shell-bottom')
const group1 = document.getElementById('group1')
const group2 = document.getElementById('group2')
const group5 = document.getElementById('group5')
const group6 = document.getElementById('group6')

document.getElementById('parallax').addEventListener('scroll', function() {
    const shellTopPathLen = group2.offsetTop + group2.offsetHeight * 0.6
    
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

    const group5Top = group5.offsetTop;
    const group6Bottom = group6.offsetTop + group6.offsetHeight;
    const curWindowBottom = this.scrollTop + window.innerHeight
    const dist = group6Bottom - group5Top + 100

    if(group5Top < curWindowBottom && curWindowBottom < group6Bottom + 100) {
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
