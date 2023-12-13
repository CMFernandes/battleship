/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/game */ \"./src/model/game.js\");\n\n\n\n(0,_model_game__WEBPACK_IMPORTED_MODULE_0__.game)().startGame()\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/model/ai.js":
/*!*************************!*\
  !*** ./src/model/ai.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ai: () => (/* binding */ Ai)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/model/player.js\");\n\n\nclass Ai extends _player__WEBPACK_IMPORTED_MODULE_0__.Player{\n\n    constructor(gameboard) {\n        super(gameboard);\n        this.lastAiAttack = [];\n    }\n    \n    aiAttack(player){\n        let row, col;\n        let result = \"\";\n\n        while(result === \"alreadyHit\" || result === \"\") {\n            row = Math.floor(Math.random() * 10);\n            col = Math.floor(Math.random() * 10);\n            result = player.receiveAttack(row, col);\n        }\n        this.lastAiAttack = [row,col];\n    }\n}\n\n//# sourceURL=webpack://battleship/./src/model/ai.js?");

/***/ }),

/***/ "./src/model/game.js":
/*!***************************!*\
  !*** ./src/model/game.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   game: () => (/* binding */ game)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/model/player.js\");\n/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ai */ \"./src/model/ai.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ \"./src/model/gameboard.js\");\n/* harmony import */ var _view_boardOp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/boardOp */ \"./src/view/boardOp.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ship */ \"./src/model/ship.js\");\n/* harmony import */ var _view_gameplayView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/gameplayView */ \"./src/view/gameplayView.js\");\n\n\n\n\n\n\n\nconst game = () => {\n    const player1Ui = document.querySelector(\"#player1-board\");\n    const aiBoardUi= document.querySelector(\"#ai-board\");\n\n    const startGame = () => {\n        const player1 = new _player__WEBPACK_IMPORTED_MODULE_0__.Player((0,_gameboard__WEBPACK_IMPORTED_MODULE_2__.gameboard)());\n        const aiPlayer = new _ai__WEBPACK_IMPORTED_MODULE_1__.Ai((0,_gameboard__WEBPACK_IMPORTED_MODULE_2__.gameboard)());\n\n        player1.playerGameboard.placeShip((0,_ship__WEBPACK_IMPORTED_MODULE_4__.ship)(2),2,3,false);\n        player1.playerGameboard.placeShip((0,_ship__WEBPACK_IMPORTED_MODULE_4__.ship)(4),6,4,true);\n        aiPlayer.playerGameboard.placeShip((0,_ship__WEBPACK_IMPORTED_MODULE_4__.ship)(4),6,4,true);\n\n\n        const player1Board = player1.playerGameboard.board;\n        const aiBoard = aiPlayer.playerGameboard.board;\n\n        (0,_view_boardOp__WEBPACK_IMPORTED_MODULE_3__.displayBoard)(player1Ui,true,player1Board);\n        (0,_view_boardOp__WEBPACK_IMPORTED_MODULE_3__.displayBoard)(aiBoardUi,false,aiBoard);\n\n        aiBoardUi.addEventListener('click', (e) => (0,_view_gameplayView__WEBPACK_IMPORTED_MODULE_5__.handlePlayerAttack)(e, player1, aiPlayer))\n    }\n    \n\n   const endGame = (player1,aiPlayer) => {\n    const player1Board = player1.playerGameboard;\n    const aiPlayerBoard = aiPlayer.playerGameboard;\n    if(player1Board.areAllShipsSunk() || aiPlayerBoard.areAllShipsSunk()){\n        let result = \"\";\n        if (player1Board.areAllShipsSunk()) {\n            result = \"You Lost!\";\n        } else if (aiPlayerBoard.areAllShipsSunk()) {\n            console.log(\"You WON!\")\n            result = \"You won!\";\n        } \n        (0,_view_gameplayView__WEBPACK_IMPORTED_MODULE_5__.displayResult)(result,player1, aiPlayer)\n       }\n    }\n   \n\n    \n\n    return {\n        startGame,\n        endGame\n    }\n}\n\n//# sourceURL=webpack://battleship/./src/model/game.js?");

/***/ }),

/***/ "./src/model/gameboard.js":
/*!********************************!*\
  !*** ./src/model/gameboard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameboard: () => (/* binding */ gameboard)\n/* harmony export */ });\n\nconst gameboard = () => {\n    const board = new Array(10).fill(null).map(() => new Array(10).fill(null));\n\n    const ships = [];\n\n    function placeShip(shipRef,row, col,isVerticalArg){\n        const shipLength = shipRef.length;\n        let isVertical = isVerticalArg;\n\n        if((isVertical && row + shipLength > 10) ||\n           (!isVertical && col + shipLength > 10)\n           ) {\n            return false;\n\n           }\n\n        for (let i = 0; i < shipLength; i++) {\n            if (isVertical && board[row + i][col]) {\n                return false;\n            } else if (!isVertical && board[row][col + i]) {      \n                return false;\n            }\n        }\n\n        for(let i = 0; i < shipLength; i++){\n            if(isVertical){\n                board[row + i][col] = { shipRef, index: i };\n            }else{\n                board[row][col + i] = { shipRef, index: i };\n            }\n        }\n\n        ships.push(shipRef);\n    }\n \n    function handleBoardAttack(row, col) {\n        if(board[row][col] === null){\n            board[row][col] = \"miss\";\n        }else {\n            if (board[row][col].shipRef){\n                board[row][col].shipRef.hit(board[row][col].index);\n                board[row][col] = \"hit\";\n            }else {\n                return \"alreadyHit\"\n            }\n        }\n        return board[row][col]\n    }\n\n\n    function areAllShipsSunk(){\n        return ships.every(ship => ship.isSunk());\n    }\n\n    function resetBoard(){\n        board = new Array(10).fill(null).map(() => new Array(10).fill(null));\n        ships = [];\n    }\n    return {\n        ships,\n        board,\n        placeShip,\n        handleBoardAttack,\n        areAllShipsSunk,\n        resetBoard\n    }\n}\n\n//# sourceURL=webpack://battleship/./src/model/gameboard.js?");

/***/ }),

/***/ "./src/model/player.js":
/*!*****************************!*\
  !*** ./src/model/player.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n\nclass Player{\n    constructor(gameboard){\n        this._gameboard = gameboard;\n    }\n\n    receiveAttack(row,col){\n        return this._gameboard.handleBoardAttack(row, col);\n    }\n \n    \n    get playerGameboard() {\n        return this._gameboard;\n    }\n}\n\n//# sourceURL=webpack://battleship/./src/model/player.js?");

/***/ }),

/***/ "./src/model/ship.js":
/*!***************************!*\
  !*** ./src/model/ship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ship: () => (/* binding */ ship)\n/* harmony export */ });\nconst ship = (shipLength) => {\n    const length = shipLength;\n    const hits = new Array(length).fill(null);\n    \n    let isVertical = false;\n\n    function hit(position){\n        console.log(\"HIT!\")\n        hits[position] = \"hit\";\n    }\n\n    function isSunk(){\n        return hits.every(hit => hit === \"hit\");\n    }\n\n\n    return {\n        hits,\n        length,\n        isVertical,\n        hit,\n        isSunk\n    }\n}\n\n\n//# sourceURL=webpack://battleship/./src/model/ship.js?");

/***/ }),

/***/ "./src/view/boardOp.js":
/*!*****************************!*\
  !*** ./src/view/boardOp.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayBoard: () => (/* binding */ displayBoard),\n/* harmony export */   updateBoard: () => (/* binding */ updateBoard)\n/* harmony export */ });\nconst displayBoard = (domElement,isPlayer1,playerBoard) => {\n    for (let i = 0; i < 10; i++) {\n        for (let j = 0; j < 10; j++) {\n            let cellStatus = playerBoard[i][j];\n\n            const cell = document.createElement(\"div\");\n            cell.classList.add(\"cell\");\n            cell.dataset.row = i;\n            cell.dataset.col = j;\n\n            if(isPlayer1 && cellStatus !== null){\n                cell.classList.add(\"ship\");\n            }\n\n            domElement.appendChild(cell);\n        }\n    }\n}\n\nconst updateBoard = (cell, boardCell) => {\n    if(boardCell === \"miss\"){\n        cell.classList.add(\"miss\");\n    }else if(boardCell === \"hit\"){\n        cell.classList.add(\"hit\");\n    }\n}\n\n//# sourceURL=webpack://battleship/./src/view/boardOp.js?");

/***/ }),

/***/ "./src/view/gameplayView.js":
/*!**********************************!*\
  !*** ./src/view/gameplayView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayResult: () => (/* binding */ displayResult),\n/* harmony export */   handleAiAttack: () => (/* binding */ handleAiAttack),\n/* harmony export */   handlePlayerAttack: () => (/* binding */ handlePlayerAttack)\n/* harmony export */ });\n/* harmony import */ var _boardOp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardOp */ \"./src/view/boardOp.js\");\n/* harmony import */ var _model_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/game */ \"./src/model/game.js\");\n\n\n\nfunction handlePlayerAttack(e, player1, aiPlayer){\n    const cell = e.target;\n\n\n    const row = cell.dataset.row;\n    const col = cell.dataset.col;\n\n    //handles click of player1 attack\n    if(aiPlayer.playerGameboard.board[row][col] !== null) {\n        return\n    }\n    aiPlayer.receiveAttack(row,col);\n    (0,_boardOp__WEBPACK_IMPORTED_MODULE_0__.updateBoard)(cell, aiPlayer.playerGameboard.board[row][col]);\n\n    setTimeout(() => {\n            //ai attack and then the player1 board update\n        handleAiAttack(player1, aiPlayer);\n\n        (0,_model_game__WEBPACK_IMPORTED_MODULE_1__.game)().endGame(player1,aiPlayer);\n    }, Math.floor(Math.random() * 2000) + 500);\n\n\n}\n\n\nfunction handleAiAttack(player1, aiPlayer){\n\n    aiPlayer.aiAttack(player1);\n    const player1BoardUi = document.querySelector(\"#player1-board\")\n\n    const row = aiPlayer.lastAiAttack[0];\n    const col = aiPlayer.lastAiAttack[1];\n\n    const cell = player1BoardUi.querySelector(`[data-row=\"${row}\"][data-col=\"${col}\"]`)\n    ;(0,_boardOp__WEBPACK_IMPORTED_MODULE_0__.updateBoard)(cell,player1.playerGameboard.board[row][col])\n}\n\n\nfunction displayResult(resultMessage,player1,aiPlayer) {\n\n    const resultContainer = document.createElement(\"div\");\n    resultContainer.classList.add(\"result-cont\")\n\n    const resultMessageElement = document.createElement(\"div\");\n    resultMessageElement.textContent = resultMessage;\n\n    const playAgainButton = document.createElement(\"button\");\n    playAgainButton.textContent = \"Play Again\";\n    playAgainButton.addEventListener('click', playAgain(player1,aiPlayer));\n\n    resultContainer.appendChild(resultMessageElement);\n    resultContainer.appendChild(playAgainButton);\n\n    document.body.appendChild(resultContainer);\n}\n\n\nfunction playAgain(player1, aiPlayer) {\n    document.querySelector(\"#player1-board\").innerHTML= \"\";\n    document.querySelector(\"#ai-board\").innerHTML= \"\";\n    player1.playerGameboard.resetBoard();\n    aiPlayer.playerGameboard.resetBoard();\n\n    const resultContainer = document.querySelector(\".result-cont\");\n    resultContainer.remove();\n}\n\n\n//# sourceURL=webpack://battleship/./src/view/gameplayView.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;