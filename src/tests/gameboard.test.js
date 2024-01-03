import { gameboard } from "../model/gameboard";
import { ship } from "../model/ship";

test("placeShip should place a ship on the gameboard", () => {
    const board = gameboard();
    const ship1 = ship(3);

    board.placeShip(ship1, 2, 2,false);

    expect(board.areAllShipsSunk()).toBe(false);
    expect(board.placeShip(ship, 2, 2)).toBe(false); 

});

test("receiveAttack should handle attacks on the gameboard", () => {
    const board = gameboard();
    const ship1 = ship(2);


    board.placeShip(ship1, 2, 2,false);

    expect(board.receiveAttack(2, 2)).toBe("hit");

    expect(board.receiveAttack(5, 5)).toBe("miss");

    expect(board.receiveAttack(2, 2)).toBe("alreadyHit");

});

test("areAllShipsSunk should correctly check if all ships are sunk", () => {
    const board = gameboard();
    const ship1 = ship(4);
    const ship2 = ship(1);

    board.placeShip(ship1, 2, 2, true);
    board.placeShip(ship2, 4, 4);

    board.receiveAttack(2, 2);
    board.receiveAttack(3, 2);
    board.receiveAttack(4, 2);
    board.receiveAttack(5, 2);
    board.receiveAttack(4, 4);

    expect(board.areAllShipsSunk()).toBe(true);
});