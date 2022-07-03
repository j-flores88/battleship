import { Ship } from '../ship.js'

it('Places ships horizontally', () => {
    const carrier = Ship('carrier', 4, false, 2);
    expect(carrier.shipCoord(2)).toStrictEqual([2, 3, 4, 5])
});

it('Places ships vertically', () => {
    const carrier = Ship('carrier', 4, false, 2, true);
    expect(carrier.shipCoord(2)).toStrictEqual([2, 12, 22, 32])
});