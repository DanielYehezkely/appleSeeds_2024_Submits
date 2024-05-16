const button = document.getElementById('toggleButton');

function toggleBackground() {
    document.body.classList.toggle('dark')
}

button.addEventListener('click', toggleBackground);