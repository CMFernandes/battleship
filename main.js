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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/game */ \"./src/model/game.js\");\n\n\n(0,_model_game__WEBPACK_IMPORTED_MODULE_0__.game)().startGame()\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/model/ai.js":
/*!*************************!*\
  !*** ./src/model/ai.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ai: () => (/* binding */ Ai)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/model/player.js\");\n\n\nclass Ai extends _player__WEBPACK_IMPORTED_MODULE_0__.Player{\n\n    constructor(gameboard) {\n        super(gameboard);\n        this.lastAiAttack = [];\n    }\n    \n    aiAttack(player){\n        let row, col;\n        let result = \"\";\n\n        while(result === \"alreadyHit\" || result === \"\") {\n            row = Math.floor(Math.random() * 10);\n            col = Math.floor(Math.random() * 10);\n            result = player.receiveAttack(row, col);\n        }\n        this.lastAiAttack = [row,col];\n    }\n}\n\n//# sourceURL=webpack://battleship/./src/model/ai.js?");

/***/ }),

/***/ "./src/model/fleet.js":
/*!****************************!*\
  !*** ./src/model/fleet.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createFleet: () => (/* binding */ createFleet)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/model/ship.js\");\n\n\nconst createFleet = () => [\n    (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(5),\n    (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(4),\n    (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(3),\n    (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(3),\n    (0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(2)\n];\n\n\n\n//# sourceURL=webpack://battleship/./src/model/fleet.js?");

/***/ }),

/***/ "./src/model/game.js":
/*!***************************!*\
  !*** ./src/model/game.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   game: () => (/* binding */ game)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/model/player.js\");\n/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ai */ \"./src/model/ai.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ \"./src/model/gameboard.js\");\n/* harmony import */ var _view_boardOp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/boardOp */ \"./src/view/boardOp.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ship */ \"./src/model/ship.js\");\n/* harmony import */ var _view_gameplayView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/gameplayView */ \"./src/view/gameplayView.js\");\n/* harmony import */ var _view_startScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/startScreen */ \"./src/view/startScreen.js\");\n/* harmony import */ var _view_domElements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../view/domElements */ \"./src/view/domElements.js\");\n/* harmony import */ var _view_drag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../view/drag */ \"./src/view/drag.js\");\n\n\n\n\n\n\n\n\n\n\nlet clickHandler\n\nconst game = () => {\n\n    const startGame = () => {\n        const player1 = new _player__WEBPACK_IMPORTED_MODULE_0__.Player((0,_gameboard__WEBPACK_IMPORTED_MODULE_2__.gameboard)());\n        const aiPlayer = new _ai__WEBPACK_IMPORTED_MODULE_1__.Ai((0,_gameboard__WEBPACK_IMPORTED_MODULE_2__.gameboard)());\n\n        const fleet = player1.fleet\n        ;(0,_view_startScreen__WEBPACK_IMPORTED_MODULE_6__.startScreen)(fleet,player1)\n\n        aiPlayer.playerGameboard.placeShip((0,_ship__WEBPACK_IMPORTED_MODULE_4__.ship)(1),6,4,true);\n\n        (0,_view_boardOp__WEBPACK_IMPORTED_MODULE_3__.displayBoard)(_view_domElements__WEBPACK_IMPORTED_MODULE_7__.elements.player1Board);\n        (0,_view_boardOp__WEBPACK_IMPORTED_MODULE_3__.displayBoard)(_view_domElements__WEBPACK_IMPORTED_MODULE_7__.elements.aiBoard);\n\n        clickHandler = (e) => (0,_view_gameplayView__WEBPACK_IMPORTED_MODULE_5__.handlePlayerAttack)(e, player1, aiPlayer);\n        _view_domElements__WEBPACK_IMPORTED_MODULE_7__.elements.aiBoard.addEventListener('click', clickHandler)\n\n        const cells = _view_domElements__WEBPACK_IMPORTED_MODULE_7__.elements.player1Board.childNodes\n        for(const cell of cells){\n            cell.addEventListener(\"drop\",(event) => (0,_view_drag__WEBPACK_IMPORTED_MODULE_8__.handleDrop)(event, player1));\n            cell.addEventListener(\"dragover\", _view_drag__WEBPACK_IMPORTED_MODULE_8__.handleDragOver);\n        }\n    }\n    \n\n   const endGame = (player1,aiPlayer) => {\n    const player1Board = player1.playerGameboard;\n    const aiBoard = aiPlayer.playerGameboard;\n\n    if(player1Board.areAllShipsSunk() || aiBoard.areAllShipsSunk()){\n        let result = \"\";\n        if (player1Board.areAllShipsSunk()) {\n            result = \"You Lost!\";\n        } else if (aiBoard.areAllShipsSunk()) {\n            result = \"You Won!\";\n        } \n        _view_domElements__WEBPACK_IMPORTED_MODULE_7__.elements.aiBoard.removeEventListener('click', clickHandler);\n        (0,_view_gameplayView__WEBPACK_IMPORTED_MODULE_5__.displayResult)(result,player1, aiPlayer)\n        return true\n        }     \n        return false\n    }   \n    return {\n    startGame,\n    endGame\n    }\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/model/game.js?");

/***/ }),

/***/ "./src/model/gameboard.js":
/*!********************************!*\
  !*** ./src/model/gameboard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameboard: () => (/* binding */ gameboard)\n/* harmony export */ });\n\nconst gameboard = () => {\n    let board = new Array(10).fill(null).map(() => new Array(10).fill(null));\n\n    let ships = [];\n\n    function placeShip(shipRef,row, col,isVerticalArg){\n        const shipLength = shipRef.length;\n        let isVertical = isVerticalArg;\n\n        if((isVertical && row + shipLength > 10) ||\n           (!isVertical && col + shipLength > 10)\n           ) {\n            return false;\n           }\n\n        for (let i = 0; i < shipLength; i++) {\n            if (isVertical && board[row + i][col]) {\n                return false;\n            } else if (!isVertical && board[row][col + i]) {      \n                return false;\n            }\n        }\n\n        for(let i = 0; i < shipLength; i++){\n            if(isVertical){\n                board[row + i][col] = { shipRef, index: i };\n            }else{\n                board[row][col + i] = { shipRef, index: i };\n            }\n        }\n        ships.push(shipRef);\n        return true\n    }\n \n    function handleBoardAttack(row, col) {\n        if(board[row][col] === null){\n            board[row][col] = \"miss\";\n        }else {\n            if (board[row][col].shipRef){\n                board[row][col].shipRef.hit(board[row][col].index);\n                board[row][col] = \"hit\";\n            }else {\n                return \"alreadyHit\"\n            }\n        }\n        return board[row][col]\n    }\n\n\n    function areAllShipsSunk(){\n        return ships.every(ship => ship.isSunk());\n    }\n\n    function resetBoard(){\n        board = new Array(10).fill(null).map(() => new Array(10).fill(null));\n        ships = [];\n    }\n\n\n    return {\n        ships,\n        board,\n        placeShip,\n        handleBoardAttack,\n        areAllShipsSunk,\n        resetBoard\n    }\n}\n\n//# sourceURL=webpack://battleship/./src/model/gameboard.js?");

/***/ }),

/***/ "./src/model/player.js":
/*!*****************************!*\
  !*** ./src/model/player.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _fleet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fleet */ \"./src/model/fleet.js\");\n\nclass Player{\n    constructor(gameboard){\n        this._gameboard = gameboard;\n        this._fleet = (0,_fleet__WEBPACK_IMPORTED_MODULE_0__.createFleet)();\n\n    }\n\n    receiveAttack(row,col){\n        return this._gameboard.handleBoardAttack(row, col);\n    }\n \n    \n    get playerGameboard() {\n        return this._gameboard;\n    }\n\n    get fleet() {\n        return this._fleet;\n    }\n}\n\n//# sourceURL=webpack://battleship/./src/model/player.js?");

/***/ }),

/***/ "./src/model/ship.js":
/*!***************************!*\
  !*** ./src/model/ship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ship: () => (/* binding */ ship)\n/* harmony export */ });\nconst ship = (shipLength) => {\n    const length = shipLength;\n    const hits = new Array(length).fill(null);\n    \n    let isVertical = false;\n\n    function getIsVertical(){\n        return isVertical\n    }\n    function changeDirection(){\n        isVertical = !isVertical;\n    }\n\n    function hit(position){\n        hits[position] = \"hit\";\n    }\n\n    function isSunk(){\n        return hits.every(hit => hit === \"hit\");\n    }\n\n   \n    return {\n        hits,\n        length,\n        getIsVertical,\n        hit,\n        isSunk,\n        changeDirection\n    }\n}\n\n\n//# sourceURL=webpack://battleship/./src/model/ship.js?");

/***/ }),

/***/ "./src/view/boardOp.js":
/*!*****************************!*\
  !*** ./src/view/boardOp.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayBoard: () => (/* binding */ displayBoard),\n/* harmony export */   updateBoard: () => (/* binding */ updateBoard),\n/* harmony export */   updatePlacedShips: () => (/* binding */ updatePlacedShips)\n/* harmony export */ });\nconst displayBoard = (domElement) => {\n    for (let i = 0; i < 10; i++) {\n        for (let j = 0; j < 10; j++) {\n            const cell = document.createElement(\"div\");\n            cell.classList.add(\"cell\");\n            cell.dataset.row = i;\n            cell.dataset.col = j;\n\n            domElement.appendChild(cell);\n        }\n    }\n}\n\nconst updateBoard = (cell, boardCell) => {\n    if(boardCell === \"miss\"){\n        cell.classList.add(\"miss\");\n    }else if(boardCell === \"hit\"){\n        cell.classList.add(\"hit\");\n    }\n}\n\nconst updatePlacedShips = (board) => {\n   const cells = document.querySelectorAll(\".cell\");\n\n    for (let i = 0; i < 10; i++) {\n        for (let j = 0; j < 10; j++) {\n            const cellStatus = board[i][j]\n            \n            const index = i * 10 + j ;\n            const cell = cells[index];\n\n            if (cellStatus !== null) {\n                cell.classList.add(\"ship\");\n            }\n           \n        }\n    }\n   \n};\n\n\n\n//# sourceURL=webpack://battleship/./src/view/boardOp.js?");

/***/ }),

/***/ "./src/view/domElements.js":
/*!*********************************!*\
  !*** ./src/view/domElements.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   elements: () => (/* binding */ elements)\n/* harmony export */ });\nconst elements = {\n    mainCont: document.querySelector(\".main-cont\"),\n    player1Board: document.querySelector(\"#player1-board\"),\n    aiBoard: document.querySelector(\"#ai-board\")\n}\n\n//# sourceURL=webpack://battleship/./src/view/domElements.js?");

/***/ }),

/***/ "./src/view/drag.js":
/*!**************************!*\
  !*** ./src/view/drag.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dragStart: () => (/* binding */ dragStart),\n/* harmony export */   handleDragOver: () => (/* binding */ handleDragOver),\n/* harmony export */   handleDrop: () => (/* binding */ handleDrop)\n/* harmony export */ });\n/* harmony import */ var _boardOp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardOp */ \"./src/view/boardOp.js\");\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElements */ \"./src/view/domElements.js\");\n\n\n\nfunction dragStart(event) {\n    const shipId = event.target.dataset.ship;\n    event.dataTransfer.setData(\"text\", shipId);\n}\n\nfunction handleDrop(event, player1) {\n    event.preventDefault();\n\n    const shipId = event.dataTransfer.getData(\"text/plain\");\n    \n    const row = parseInt(event.target.dataset.row);\n    const col = parseInt(event.target.dataset.col);\n\n    const ship = player1.fleet[shipId];\n    let shipDirection = ship.getIsVertical();\n\n    const placedShip = player1.playerGameboard.placeShip(ship, row, col,shipDirection)\n \n    if(placedShip){\n        (0,_boardOp__WEBPACK_IMPORTED_MODULE_0__.updatePlacedShips)(player1.playerGameboard.board);\n\n        let shipElement = document.querySelector(`[data-ship=\"${shipId}\"]`)\n        let ships = document.querySelector(\".ships\")\n        ships.removeChild(shipElement)\n\n        if((player1.playerGameboard.ships.length === 5)){\n            _domElements__WEBPACK_IMPORTED_MODULE_1__.elements.aiBoard.classList.toggle(\"hidden\");\n            document.querySelector(\".ships-cont\").classList.toggle(\"hidden\")\n        }\n    };\n}\n\n\n\nfunction handleDragOver(event) {\n    event.preventDefault();\n}\n\n//# sourceURL=webpack://battleship/./src/view/drag.js?");

/***/ }),

/***/ "./src/view/gameplayView.js":
/*!**********************************!*\
  !*** ./src/view/gameplayView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayResult: () => (/* binding */ displayResult),\n/* harmony export */   handleAiAttack: () => (/* binding */ handleAiAttack),\n/* harmony export */   handlePlayerAttack: () => (/* binding */ handlePlayerAttack)\n/* harmony export */ });\n/* harmony import */ var _boardOp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardOp */ \"./src/view/boardOp.js\");\n/* harmony import */ var _model_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/game */ \"./src/model/game.js\");\n\n\n\nfunction handlePlayerAttack(e, player1, aiPlayer){\n    const cell = e.target;\n\n    const row = cell.dataset.row;\n    const col = cell.dataset.col;\n\n    //handles click of player1 attack\n    if(cell.classList.contains(\"miss\") ||\n        cell.classList.contains(\"hit\")) {\n        return\n    } \n\n    if((0,_model_game__WEBPACK_IMPORTED_MODULE_1__.game)().endGame(player1, aiPlayer)) {\n        return;\n    }\n\n    aiPlayer.receiveAttack(row,col);\n    (0,_boardOp__WEBPACK_IMPORTED_MODULE_0__.updateBoard)(cell,aiPlayer.playerGameboard.board[row][col]);\n    \n    //handles ai attack\n    if (!(0,_model_game__WEBPACK_IMPORTED_MODULE_1__.game)().endGame(player1, aiPlayer)) {\n        handleAiAttack(player1, aiPlayer);\n    }\n}\n\n\nfunction handleAiAttack(player1, aiPlayer){\n\n    aiPlayer.aiAttack(player1);\n    const player1BoardUi = document.querySelector(\"#player1-board\")\n\n    const row = aiPlayer.lastAiAttack[0];\n    const col = aiPlayer.lastAiAttack[1];\n\n    const cell = player1BoardUi.querySelector(`[data-row=\"${row}\"][data-col=\"${col}\"]`)\n    ;(0,_boardOp__WEBPACK_IMPORTED_MODULE_0__.updateBoard)(cell,player1.playerGameboard.board[row][col])\n}\n\n\nfunction displayResult(resultMessage,player1,aiPlayer) {\n    const mainCont = document.querySelector(\".main-cont\")\n\n    const resultContainer = document.createElement(\"div\");\n    resultContainer.classList.add(\"result-cont\")\n\n    const resultMessageElement = document.createElement(\"div\");\n    resultMessageElement.textContent = resultMessage;\n\n    const playAgainButton = document.createElement(\"button\");\n    playAgainButton.textContent = \"Play Again\";\n    playAgainButton.addEventListener('click', () =>playAgain(player1,aiPlayer));\n    \n    \n    resultContainer.appendChild(resultMessageElement);\n    resultContainer.appendChild(playAgainButton);\n    mainCont.appendChild(resultContainer);\n\n    const aiBoardUi= document.querySelector(\"#ai-board\")\n    aiBoardUi.removeEventListener('click', handlePlayerAttack);\n}\n\nfunction playAgain(player1, aiPlayer) {\n    document.querySelector(\"#player1-board\").innerHTML= \"\";\n    document.querySelector(\"#ai-board\").innerHTML= \"\";\n    document.querySelector(\".ships-cont\").remove();\n\n    player1.playerGameboard.resetBoard();\n    aiPlayer.playerGameboard.resetBoard();\n\n    const resultContainer = document.querySelector(\".result-cont\");\n    resultContainer.remove();\n\n    (0,_model_game__WEBPACK_IMPORTED_MODULE_1__.game)().startGame()\n}\n\n\n//# sourceURL=webpack://battleship/./src/view/gameplayView.js?");

/***/ }),

/***/ "./src/view/startScreen.js":
/*!*********************************!*\
  !*** ./src/view/startScreen.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createShips: () => (/* binding */ createShips),\n/* harmony export */   startScreen: () => (/* binding */ startScreen)\n/* harmony export */ });\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ \"./src/view/domElements.js\");\n/* harmony import */ var _drag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag */ \"./src/view/drag.js\");\n\n\n\n\nfunction startScreen(fleet,player1){\n    _domElements__WEBPACK_IMPORTED_MODULE_0__.elements.aiBoard.classList.toggle(\"hidden\");\n   \n    const shipsCont = document.createElement(\"div\");\n    shipsCont.classList.add(\"ships-cont\");\n\n    const title = document.createElement(\"h2\");\n    title.textContent = \"Place your ships\"\n\n    const ships = createShips(fleet,player1);\n\n    shipsCont.appendChild(title);\n    shipsCont.appendChild(ships)\n    _domElements__WEBPACK_IMPORTED_MODULE_0__.elements.mainCont.appendChild(shipsCont)\n}\n\nfunction createShips(fleet,player1) {\n    const ships = document.createElement(\"div\");\n    ships.classList.add(\"ships\");\n\n    for (let i = 0; i < fleet.length; i++) {\n        const shipContainer = document.createElement(\"div\");\n        shipContainer.classList.add(\"ship\",\"container\");\n        shipContainer.draggable = true;\n        shipContainer.dataset.ship = `${i}`;\n\n        for (let j = 0; j < fleet[i].length; j++) {\n            const shipSegment = document.createElement(\"div\");\n            shipSegment.classList.add(\"ship\", \"segment\");\n            shipContainer.appendChild(shipSegment);\n        }\n\n        shipContainer.addEventListener('dragstart', _drag__WEBPACK_IMPORTED_MODULE_1__.dragStart);\n        shipContainer.addEventListener('dblclick' , (e) => changeShipDirection(e,player1))\n\n        ships.appendChild(shipContainer);\n    }\n    return ships;\n}\n\nfunction changeShipDirection(e,player1){\n    const shipElement = e.target.parentElement;\n\n    const ship = player1.fleet[shipElement.dataset.ship]\n\n    ship.changeDirection()\n    shipElement.classList.toggle(\"vertical\");\n}\n\n//# sourceURL=webpack://battleship/./src/view/startScreen.js?");

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