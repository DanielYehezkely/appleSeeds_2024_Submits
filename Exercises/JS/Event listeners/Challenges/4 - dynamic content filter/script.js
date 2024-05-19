const useInput = document.getElementById('filterInput');
const itemsList = document.querySelectorAll('.item')

useInput.addEventListener('keyup', (event)=>{
    itemsList.forEach(item => {
        if (!item.textContent.toLowerCase().includes(event.target.value.toLowerCase())) {
            item.style.display = 'none'
        } else {
            item.style.display = '';
        }
    })
})