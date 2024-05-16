const allText = document.querySelectorAll('.text');

document.addEventListener('scroll', () => {
    allText.forEach(text => {
        let position = text.getBoundingClientRect();
        if (position.bottom > 0 && position.top < window.innerHeight) {
            text.classList.add('active');
        } else {
            text.classList.remove('active');
        }
    });
});