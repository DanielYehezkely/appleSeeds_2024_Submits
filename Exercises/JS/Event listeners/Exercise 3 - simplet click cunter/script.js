const button = document.getElementById('clickButton');
const resetButton = document.getElementById('reset-btn');

function getCounterElement() {
    return document.getElementById('counter');
}

button.addEventListener('click', () => {
    const counter = getCounterElement();
    counter.textContent++;
});

resetButton.addEventListener('click', () => {
    const counter = getCounterElement();
    counter.textContent = 0;
});