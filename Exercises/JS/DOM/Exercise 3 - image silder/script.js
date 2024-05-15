const slides = document.querySelectorAll('img')
let currentIndex = 0;
const moveSlides = (direction) =>{
    slides[currentIndex].classList.remove('active');
    currentIndex += direction
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex >= slides.length){
        currentIndex = slides.length - 1
    }
    slides[currentIndex].classList.add('active')
}