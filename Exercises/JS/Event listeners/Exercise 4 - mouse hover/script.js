const allPar = document.querySelectorAll('.highlightable');

allPar.forEach(par => {
    par.addEventListener('mouseover',()=>{
        par.classList.add('highlighted')
    });
    par.addEventListener('mouseout', () => {
        par.classList.remove('highlighted');
    });
})
