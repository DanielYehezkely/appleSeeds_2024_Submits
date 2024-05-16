const navList = document.getElementById('navList');
const message = document.getElementById('message');

navList.addEventListener('click', (event)=>{
    const clickedLink = event.target.getAttribute('data-link');
    message.textContent = clickedLink
    message.style.display = 'block';
    setTimeout(function () {
        message.style.display = 'none';
    }, 2000);
})