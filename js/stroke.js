
document.getElementById('parallax').addEventListener('scroll', function() {
    const rotation = (this.scrollTop * 0.4) + 'deg';

    const elements = document.querySelectorAll('.stroke');

    // Применяем трансформацию к каждому элементу
    elements.forEach(function(element) {
        element.style.transform = 'translate(-50%, -50%)' + ' rotate(' + rotation + ')';
    });
})