import { ship } from "../model/ship";

test('creates a ship with the correct hits', () => {
    const myShip = ship(4);

    expect(myShip.hits).toEqual([null, null, null, null]);
});


test('ship can be hit at a specific position', () => {
    const myShip = ship(4);
    
    myShip.hit(1);
    expect(myShip.hits).toEqual([null, "hit", null, null]);

    myShip.hit(3);
    expect(myShip.hits).toEqual([null, "hit", null, "hit"]);
});

test('ship is considered sunk when all parts are hit', () => {
    const myShip = ship(3);

    myShip.hit(0);
    myShip.hit(1);
    myShip.hit(2);

    expect(myShip.isSunk()).toBe(true);
});


test('ship is not considered sunk if not all parts are hit', () => {
    const myShip = ship(3);

    myShip.hit(0);
    myShip.hit(1);

    expect(myShip.isSunk()).toBe(false);
});