import {  updatePlacedShips } from "./boardOp";

export function dragStart(event) {
    const shipId = event.target.dataset.ship;
    event.dataTransfer.setData("text", shipId);
}

export function handleDrop(event, player1) {
    event.preventDefault();

    const shipId = event.dataTransfer.getData("text/plain");
    
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);

    const ship = player1.fleet[shipId];
    let shipDirection = ship.getIsVertical();

    const placedShip = player1.playerGameboard.placeShip(ship, row, col,shipDirection);
 
    if(placedShip){
        updatePlacedShips(player1);

        let shipElement = document.querySelector(`[data-ship="${shipId}"]`);
        let ships = document.querySelector(".ships");
        ships.removeChild(shipElement);

        if((player1.playerGameboard.ships.length === 5)){
            document.querySelector(".start-btn").classList.remove("hidden");
        };
    };
};



export function handleDragOver(event) {
    event.preventDefault();
};