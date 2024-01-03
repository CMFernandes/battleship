
export const displayBoard = (domElement) => {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = i;
            cell.dataset.col = j;

            domElement.appendChild(cell);
        }
    }
}

export const updateBoard = (cell, boardCell) => {
    if(boardCell === "miss"){
        cell.classList.add("miss");
    }else if(boardCell === "hit"){
        cell.classList.add("hit");
    };
};

export const updatePlacedShips = (player) => {
    const board = player.playerGameboard.board;
    
    const cells = document.querySelectorAll(".cell");

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const cellStatus = board[i][j]
            
            const index = i * 10 + j ;
            const cell = cells[index];

            if (cellStatus !== null) {
                cell.classList.add("ship");
            };
           
        };
    };
   
};

