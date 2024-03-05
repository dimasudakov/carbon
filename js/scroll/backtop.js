const backTop = document.getElementById('backtop');

backTop.addEventListener('click', function () {
    const parallax = document.getElementById('group1');

    parallax.scrollIntoView({behavior: 'smooth'});
});

document.getElementById('parallax').addEventListener('scroll', function() {
    const group2 = document.getElementById('group2')

    const offsetTop = group2.offsetTop
    
    if(this.scrollTop < offsetTop) {
        document.querySelector('.backtop-wrapper').style.display = 'none'
    } else {
        document.querySelector('.backtop-wrapper').style.display = 'block'
        if(this.scrollTop < offsetTop + 400) {
            document.querySelector('.backtop-wrapper').style.opacity = (this.scrollTop - offsetTop) / 400 + ''
        } else {
            document.querySelector('.backtop-wrapper').style.opacity = '1'
        }
    }
})
