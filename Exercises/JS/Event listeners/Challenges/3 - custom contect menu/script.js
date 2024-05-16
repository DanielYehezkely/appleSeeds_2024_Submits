const contextMenu = document.getElementById('contextMenu');
const allItems = document.querySelectorAll('.context-menu-item')


document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    contextMenu.style.display = 'block'
    contextMenu.style.top = `${event.pageY}px`;
    contextMenu.style.left = `${event.pageX}px`;
});

document.addEventListener('click', (event)=>{
    if (event.target !== viewDetails && event.target !== copyText) {
        contextMenu.style.display = 'none';
    }
})

allItems.forEach(item => {
    item.addEventListener('click', () => {
        alert(`${item.textContent} clicked !`);
        contextMenu.style.display = 'none';
    })
})
