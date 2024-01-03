import { updateBoard } from "./boardOp";
import game from "../index"
import { playAgain } from "./eventListeners";
import { elements } from "./domElements";
import { addDropEventListeners } from "./eventListeners";

export function handlePlayerAttack(e, player1, aiPlayer){
    const cell = e.target;

    const row = cell.dataset.row;
    const col = cell.dataset.col;

    if(cell.classList.contains("miss") ||
        cell.classList.contains("hit")) {
        return
    } 

    aiPlayer.receiveAttack(row,col);
    updateBoard(cell,aiPlayer.playerGameboard.board[row][col]);
    
    if (!game.endGame()) {
        handleAiAttack(player1, aiPlayer);
        if(game.endGame()) {
            return;
        }
    }
}


export function handleAiAttack(player1, aiPlayer){

    aiPlayer.aiAttack(player1);
    const player1BoardUi = document.querySelector("#player1-board")

    const row = aiPlayer.lastAiAttack[0];
    const col = aiPlayer.lastAiAttack[1];

    const cell = player1BoardUi.querySelector(`[data-row="${row}"][data-col="${col}"]`)
    updateBoard(cell,player1.playerGameboard.board[row][col])
}


export function displayResult(resultMessage,player1,aiPlayer) {
    const mainCont = document.querySelector(".main-cont")

    const resultContainer = document.createElement("div");
    resultContainer.classList.add("result-cont")

    const resultMessageElement = document.createElement("div");

    const resultMessagePara = document.createElement("p");
    resultMessagePara.textContent = resultMessage;

    const playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play Again";
    playAgainButton.addEventListener('click', () => playAgain(player1,aiPlayer));
    
    resultMessageElement.appendChild(resultMessagePara);
    resultMessageElement.appendChild(playAgainButton)
    resultContainer.appendChild(resultMessageElement);
    mainCont.appendChild(resultContainer);

    const aiBoardUi= document.querySelector("#ai-board")
    aiBoardUi.removeEventListener('click', handlePlayerAttack);
}

export function resetBoards(player1,aiPlayer){
    elements.player1Board.innerHTML= "";
    elements.aiBoard.innerHTML= "";

    addDropEventListeners(player1);

    player1.playerGameboard.resetBoard();
    aiPlayer.playerGameboard.resetBoard();
}
