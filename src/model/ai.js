import { Player } from "./player";

export class Ai extends Player{

    constructor(gameboard) {
        super(gameboard);
        this.lastAiAttack = [];
    }
    
    aiAttack(player){
        let row, col;
        let result = "";

        while(result === "alreadyHit" || result === "") {
            row = Math.floor(Math.random() * 10);
            col = Math.floor(Math.random() * 10);
            result = player.receiveAttack(row, col);
        }
        this.lastAiAttack = [row,col];
    }
}