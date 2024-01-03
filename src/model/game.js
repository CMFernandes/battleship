import { Player } from "./player"
import { Ai } from "./ai"
import { gameboard } from "./gameboard";
import { displayBoard } from "../view/boardOp";
import { displayResult, handlePlayerAttack } from "../view/gameplayView";
import { startScreen } from "../view/startScreen";
import { elements } from "../view/domElements";
import { addDropEventListeners } from "../view/eventListeners";

let clickHandler

const Game = () => {
    const player1 = new Player(gameboard());
    const aiPlayer = new Ai(gameboard());

    const startGame = () => {
        startScreen(player1,aiPlayer);

        displayBoard(elements.player1Board);
        displayBoard(elements.aiBoard);

        addDropEventListeners(player1)

        aiPlayer.playerGameboard.autoPlace(aiPlayer.fleet)
        
        clickHandler = (e) => handlePlayerAttack(e, player1, aiPlayer);
        elements.aiBoard.addEventListener('click', clickHandler)
    };

    const resetGame = () => {
        player1.resetFleet();
        aiPlayer.resetFleet();

        player1.playerGameboard.resetBoard();
        aiPlayer.playerGameboard.resetBoard();

        startGame()
    }

   const endGame = () => {
    const player1Board = player1.playerGameboard;
    const aiBoard = aiPlayer.playerGameboard;

    if(player1Board.areAllShipsSunk() || aiBoard.areAllShipsSunk()){
        let result = "";
        if (player1Board.areAllShipsSunk()) {
            result = "You Lost!";
        } else if (aiBoard.areAllShipsSunk()) {
            result = "You Won!";
        } 
        elements.aiBoard.removeEventListener('click', clickHandler);
        displayResult(result,player1, aiPlayer)
        return true
        }     
        return false
    }; 
    return {
    startGame,
    resetGame,
    endGame
    };
};

export default Game
