document.getElementById('parallax').addEventListener('scroll', function() {
    var scrollPosition = this.scrollTop; 
    var svgSize = 400 - scrollPosition * 0.3;
    
    var right = -80 + (400 - svgSize) / 2 * 0.6;

    var rotation = (scrollPosition * 0.2) + 'deg'; 
    
    if (svgSize <= 10) {
        document.querySelector('.shell-background').style.display = 'none'
    } else {
        document.querySelector('.shell-background').style.display = ''
    }
    
    // 660 -> 860: opacity 1 -> 0
    if(this.scrollTop > 660) {
        const newOpacity = 1.0 - (this.scrollTop - 660.0) / 200.0
        document.querySelector('.shell-background').style.opacity = newOpacity + ''
    } else {
        document.querySelector('.shell-background').style.opacity = '1'
    }

    document.querySelector('.shell-background').style.width = svgSize + 'px';
    document.querySelector('.shell-background').style.right = right + 'px';
    document.querySelector('.shell-background').style.transform = 'rotate(' + rotation + ')';
    document.querySelector('.shell-background').style.top = 100 + this.scrollTop + 'px';
    
});
