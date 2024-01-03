import { elements } from "./domElements";
import { handleDrop,handleDragOver } from "./drag";
import { displayBoard, updatePlacedShips } from "./boardOp";
import { createShips, startScreen } from "./startScreen";
import  game  from "../index";
import { resetBoards } from "./gameplayView";

export function addDropEventListeners(player){
    const cells = elements.player1Board.childNodes;

    for(const cell of cells){
        cell.addEventListener("drop",(event) => handleDrop(event, player));
        cell.addEventListener("dragover", handleDragOver);
    }
}

export function playAgain(player1, aiPlayer) {
    const resultContainer = document.querySelector(".result-cont");
    resultContainer.remove();

    elements.player1Board.innerHTML="";
    resetBoards(player1, aiPlayer);

    game.resetGame();
}

export function autoPlaceShips(player){

    const ships = document.querySelector(".ships");
    const startBtn = document.querySelector(".start-btn")

    ships.style.display= "none";
    startBtn.classList.remove("hidden");

    elements.player1Board.innerHTML="";
    displayBoard(elements.player1Board);

    player.playerGameboard.resetBoard();
    player.playerGameboard.autoPlace(player.fleet);
    
    updatePlacedShips(player)
};


export function startGameView(){
    elements.aiBoard.classList.remove("hidden");
    document.querySelector(".ships-cont").remove();
};


export function resetBoardEvent(player1){
    elements.player1Board.innerHTML= "";
    displayBoard(elements.player1Board);

    addDropEventListeners(player1);

    player1.playerGameboard.resetBoard();

    let startBtn = document.querySelector(".start-btn");
    startBtn.classList.add("hidden");

    let ships = document.querySelector(".ships");
    const shipsCont = document.querySelector(".ships-cont");

    ships.remove();

    ships = createShips(player1);

    shipsCont.appendChild(ships);
};