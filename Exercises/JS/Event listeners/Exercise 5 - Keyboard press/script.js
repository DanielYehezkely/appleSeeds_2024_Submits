const keyDisplay = document.getElementById('keyDisplay');

document.addEventListener('keydown', (event)=>{
    keyDisplay.textContent = event.key === ' ' ? 'Space' : event.key
})