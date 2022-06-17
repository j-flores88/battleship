/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const playerGrid = document.getElementById('playerGrid');\nconst compGrid = document.getElementById('compGrid');\n\nfunction createGrid(rows, cols, container) {\n    container.style.setProperty('--grid-rows', rows);\n    container.style.setProperty('--grid-cols', cols);\n    for(let c = 0; c < (rows * cols); c++) {\n        let cell = document.createElement('div');\n        cell.innerText = ('x');\n        cell.classList.add('cell');\n        container.appendChild(cell);\n    }\n};\n\ncreateGrid(10, 10, playerGrid);\ncreateGrid(10, 10, compGrid)\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;