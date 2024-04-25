const initializeGameGrid = () => {
    const gridContainer = document.getElementById('grid-container');

    gridContainer.innerHTML = '';

    for (let i = 0; i < 100; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }
};

initializeGameGrid();