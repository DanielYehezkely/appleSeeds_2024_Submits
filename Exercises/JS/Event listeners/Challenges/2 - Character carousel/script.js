const characters = document.querySelectorAll('.character');

const positions = [0, 1, 2];

const updateCarousel = () => {
    characters.forEach((character,index) => {
        const currPosition = positions[index]
        const isCenter = (currPosition === 1);
        character.style.transform = `translateX(${(currPosition - 1) * 180}px) scale(${isCenter ? 1.2 : 0.8})`;
        character.style.zIndex = isCenter ? 2 : 1;
        character.classList.toggle('character-center', isCenter);
    })
}

characters.forEach((character, index) => {
    character.addEventListener('click', ()=>{
        if (positions[index] === 1) {
            return ;
        }
        const clickedPosition = positions[index];
        const rotations = clickedPosition === 0 ? 1 : 2;

        for (let i = 0; i < rotations; i++) {
            positions.push(positions.shift());
        }
        updateCarousel();
    })
})

updateCarousel();
