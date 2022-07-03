import _ from 'lodash'

const playerGrid = document.getElementById('playerGrid');
const compGrid = document.getElementById('compGrid');

import { createGrid } from './createGrid.js';

createGrid(playerGrid);
createGrid(compGrid)