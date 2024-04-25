let movesLeft = 20;
let score = 0;
let treasuresRemaining = 4;

const getRandomIndex = () => Math.floor(Math.random() * 100);

const initializeGameGrid = () => {
    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = '';
    for (let i = 0; i < 100; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }
}

const updateScore = () => {
    const scoreElement = document.querySelector('.score');
    scoreElement.textContent = 'Score: ' + score;
};

const updateMovesLeft = () => {
    const movesLeftElement = document.querySelector('.moves');
    movesLeftElement.textContent = 'Moves left: ' + movesLeft;
};

const move = (direction) => {
    const gridItems = document.querySelectorAll('.grid-item');
    const player = document.querySelector('.player');

    let currentIndex = Array.from(gridItems).indexOf(player);

    const currentRow = Math.floor(currentIndex / 10);
    const currentCol = currentIndex % 10;

    let newRow = currentRow;
    let newCol = currentCol;
    if (direction === 'up' && currentRow > 0) {
        newRow--;
    } else if (direction === 'down' && currentRow < 9) {
        newRow++;
    } else if (direction === 'left' && currentCol > 0) {
        newCol--;
    } else if (direction === 'right' && currentCol < 9) {
        newCol++;
    }

    const newIndex = newRow * 10 + newCol;

    if (gridItems[newIndex]) {
        player.classList.remove('player');
        gridItems[newIndex].classList.add('player');
        movesLeft--;

        if (gridItems[newIndex].classList.contains('trap')) {
            alert("You've stepped on a trap!");
            gridItems[newIndex].classList.remove('trap');
            movesLeft -= 4;
            score -= 5;
        } else if (gridItems[newIndex].classList.contains('treasure')) {
            alert("You've found a treasure!")
            gridItems[newIndex].classList.remove('treasure');
            score += 10;
            treasuresRemaining--; 
        }

        updateScore();
        updateMovesLeft();

        if (movesLeft <= 0) {
            alert("You've lost!");
            location.reload();
        } else if (treasuresRemaining === 0) {
            alert("Congratulations! You've won!");
            location.reload();
        }
    }
};

const initializeGame = () => {
    initializeGameGrid();
    const playerIndex = getRandomIndex();
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems[playerIndex].classList.add('player');
    for (let i = 0; i < 4; i++) {
        const treasureIndex = getRandomIndex();
        gridItems[treasureIndex].classList.add('treasure');
    }
    for (let i = 0; i < 3; i++) {
        const trapIndex = getRandomIndex();
        gridItems[trapIndex].classList.add('trap');
    }
    move();
};

initializeGame();





