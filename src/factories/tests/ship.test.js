import { Ship } from '../ship.js';
const carrier = Ship('carrier', 4, 2);
const sub = Ship('sub', 3, 10, true);

it('Places ships horizontally', () => {
    expect(carrier.shipCoords).toStrictEqual([2, 3, 4, 5])
});

it('Places ships vertically', () => {
    expect(sub.shipCoords).toStrictEqual([10, 20, 30])
});

it('Sets length of ship', () =>{
    expect(sub.length).toBe(3);
});

//Hit function
it('Marks correct targets with an "x"', () => {
    sub.hit(20);
    expect(sub.shipCoords).toStrictEqual([10, "x", 30]);
});

//isSunk Function
it('Returns true if all coords are marked "x"', () => {
    sub.hit(10);
    sub.hit(20);
    sub.hit(30);
    expect(sub.isSunk()).toBeTruthy();
});