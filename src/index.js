import _, { compact } from 'lodash';
import { Gameboard } from './factories/gameboard.js';

const playerGrid = document.getElementById('playerGrid');
const compGrid = document.getElementById('compGrid');

const playerBoard = Gameboard();
const compBoard = Gameboard();

playerBoard.createGrid(playerGrid);
compBoard.createGrid(compGrid);