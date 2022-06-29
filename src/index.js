import _ from 'lodash'

const playerGrid = document.getElementById('playerGrid');
const compGrid = document.getElementById('compGrid');

import { createGrid } from './createGrid.js';

createGrid(10, 10, playerGrid);
createGrid(10, 10, compGrid)