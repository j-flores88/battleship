import { Ship } from "./ship";


export const Gameboard = (canvas, numCells = 10) => {

    const ctx = canvas.getContext('2d');
    const cellSize = Math.floor(canvas.width / numCells)

    const fillCell = (x, y, color) => {
        ctx.fillStyle = color;
        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        ctx.stroke()
    }
    
    const drawGrid = () => {
        ctx.beginPath();
        for(let i = 0; i < numCells + 1; i++) {
            ctx.moveTo(i*cellSize, 0);
            ctx.lineTo(i*cellSize, cellSize * numCells);

            ctx.moveTo(0, i*cellSize);
            ctx.lineTo(cellSize * numCells, i*cellSize);
        }
        ctx.stroke();
    };

    const placeShip = (x, y, shipCoords, vertical = true) => {
        for(let i = 0; i < shipCoords.length; i++) {
            if(vertical) {
                if(shipCoords[shipCoords.length - 1] > 9) return
                fillCell(shipCoords[i], y, 'grey')
            } else {
                if(shipCoords[shipCoords.length - 1] > 9) return
                fillCell(x, shipCoords[i], 'grey')
            }
        }
    }

    const clearBoard = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    const reset = () => {
        clearBoard();
        drawGrid()
    };


    /* OLD CODE */
    // let board = new Array();
    // let row;

    // const createGrid = (container) => {
        
    
    //     for(let y = 0; y < 10; y++) {
    //         row = new Array();
    //         for(let cell = 0; cell < 10; cell++) {
    //             row.push(cell)
    //             row[cell] = ``
    //             // row[cell] = `<div class="cell" data=${y}${cell}></div>`;
    //         };
    //         board.push(row)
    //         // board[y] = '<div class="row">'+ row.join('\r\n') + '</div>'
            
    //     }
    //     container.innerHTML = board.join('\r\n');
    //     // return board
    // };

    // const placeShip = (x, y) => {
    //     board[x][y] = 's'
    //     console.log(board);
    //     return board
    // }

    return {
        fillCell, reset, placeShip
    }
};