import { elements } from "./domElements";
import { dragStart} from "./drag";
import { startGameView,resetBoardEvent,autoPlaceShips } from "./eventListeners";

export function startScreen(player1,aiPlayer){
    elements.aiBoard.classList.add("hidden");
   
    const shipsCont = document.createElement("div");
    shipsCont.classList.add("ships-cont");

    const title = document.createElement("h2");
    title.textContent = "Place your ships";

    const info = document.createElement("p");
    info.textContent = "* double click to rotate ship"

    const autoPlaceBtn = document.createElement("button");
    autoPlaceBtn.textContent= "Auto-place";
    autoPlaceBtn.classList.add("autoPlace-btn")

    const resetBoardBtn = document.createElement("button");
    resetBoardBtn.textContent= "Reset Board";
    resetBoardBtn.classList.add("resetBoard-btn");

    const startBtn = document.createElement("button");
    startBtn.textContent= "Start";
    startBtn.classList.add("start-btn");
    startBtn.classList.add("hidden");

   
    const ships = createShips(player1);

    shipsCont.appendChild(title);
    shipsCont.appendChild(info);
    shipsCont.appendChild(autoPlaceBtn);
    shipsCont.appendChild(resetBoardBtn);
    shipsCont.appendChild(startBtn);
    shipsCont.appendChild(ships);
    elements.mainCont.appendChild(shipsCont);

    autoPlaceBtn.addEventListener('click', () => autoPlaceShips(player1));
    resetBoardBtn.addEventListener('click', () => resetBoardEvent(player1))

    startBtn.addEventListener('click', () => startGameView(player1,aiPlayer));

}

export function createShips(player1) {
    const ships = document.createElement("div");
    ships.classList.add("ships");

    const fleet = player1.fleet;

    for (let i = 0; i < fleet.length; i++) {
        const shipContainer = document.createElement("div");
        shipContainer.classList.add("ship","container");
        shipContainer.draggable = true;
        shipContainer.dataset.ship = `${i}`;

        for (let j = 0; j < fleet[i].length; j++) {
            const shipSegment = document.createElement("div");
            shipSegment.classList.add("ship", "segment");
            shipContainer.appendChild(shipSegment);
        }

        shipContainer.addEventListener('dragstart', dragStart);
        shipContainer.addEventListener('dblclick' , (e) => changeShipDirection(e,player1));

        ships.appendChild(shipContainer);
    }
    return ships;
};

function changeShipDirection(e,player1){
    const shipElement = e.target.parentElement;

    const ship = player1.fleet[shipElement.dataset.ship];

    ship.changeDirection()
    shipElement.classList.toggle("vertical");
};


