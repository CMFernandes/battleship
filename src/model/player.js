import { createFleet } from "./fleet";
export class Player{
    constructor(gameboard){
        this._gameboard = gameboard;
        this._fleet = createFleet();
    }

    receiveAttack(row,col){
        return this._gameboard.handleBoardAttack(row, col);
    }
 
    get playerGameboard() {
        return this._gameboard;
    };

    get fleet() {
        return this._fleet;
    };

    resetFleet() {
        this._fleet = createFleet();
    };
};