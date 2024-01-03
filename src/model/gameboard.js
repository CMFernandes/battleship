export const gameboard = () => {
    let board = new Array(10).fill(null).map(() => new Array(10).fill(null));

    const ships = [];

    function placeShip(shipRef,row, col,isVerticalArg){
        const shipLength = shipRef.length;
        let isVertical = isVerticalArg;

        if((isVertical && row + shipLength > 10) ||
           (!isVertical && col + shipLength > 10)
           ) {
            return false;
           };

        for (let i = 0; i < shipLength; i++) {
            if (isVertical && board[row + i][col] !== null) {
                return false;
            } else if (!isVertical && board[row][col + i] !== null) {      
                return false;
            }
        };

        for(let i = 0; i < shipLength; i++){
            if(isVertical){
                board[row + i][col] = { shipRef, index: i };
            }else{
                board[row][col + i] = { shipRef, index: i };
            }
        };
        ships.push(shipRef);

        return true
    };
    
    function autoPlace(fleet){
        for (let i = 0; i < fleet.length; i++) {
            const ship = fleet[i];
            let isVertical, row, col;
    
            do {
                row = Math.floor(Math.random() * 10);
                col = Math.floor(Math.random() * 10);
                isVertical = Math.random() < 0.5;
            } while (!placeShip(ship, row, col, isVertical));
        };
    };
     
    function handleBoardAttack(row, col) {
        if(board[row][col] === null){
            board[row][col] = "miss";
        }else {
            if (board[row][col].shipRef){
                board[row][col].shipRef.hit(board[row][col].index);
                board[row][col] = "hit";
            }else {
                return "alreadyHit"
            };
        };
        return board[row][col]
    };


    function areAllShipsSunk(){
        return ships.every(ship => ship.isSunk());
    };

    function resetBoard(){

        ships.splice(0, ships.length)
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
              board[i][j] = null;
            };
        };
    };

    return {
        ships,
        board,
        placeShip,
        autoPlace,
        handleBoardAttack,
        areAllShipsSunk,
        resetBoard
    }
}