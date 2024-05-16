const showModalBtn = document.getElementById('showModalBtn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

document.addEventListener('click', (event)=>{
    if (event.target === showModalBtn) {
        overlay.style.display = 'block'
    } else if (event.target === overlay || event.target === closeBtn){
        overlay.style.display = 'none'
    } 
})

