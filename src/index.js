import _, { compact } from 'lodash';
import { Gameboard } from './factories/gameboard.js';

const playerGrid = document.getElementById('playerGrid');
const compGrid = document.getElementById('compGrid');

const playerBoard = Gameboard(playerGrid);
const compBoard = Gameboard(compGrid);

(() => {
    playerBoard.reset();
    compBoard.reset();
    playerBoard.placeShip(7, 6, [7, 8, 9], false)
})();