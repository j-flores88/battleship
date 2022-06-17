const playerGrid = document.getElementById('playerGrid');
const compGrid = document.getElementById('compGrid');

function createGrid(rows, cols, container) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        cell.innerText = ('x');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
};

createGrid(10, 10, playerGrid);
createGrid(10, 10, compGrid)