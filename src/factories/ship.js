export const Ship = (name, length, startCoord, vertical = false) => {
    const shipCoords = [];

    const setCoords = (startCoord) => {
        if(vertical) {
            for(let i = 0; i < length; i++) {
                shipCoords.push(startCoord + i * 10);
            } 
        } else {
            for(let i = 0; i < length; i++) {
                shipCoords.push(startCoord + i);
            }
        }
        return shipCoords;
    }

    const hit = (coord) => {
        for(let [index, coords] of shipCoords.entries()) {
            if(coord === coords) {
                shipCoords[index] = 'x';
            }
        }
        return shipCoords;
    };

    const isSunk = () => shipCoords.every(e => e === 'x');

    setCoords(startCoord);

    return {
        name, length, startCoord, vertical, shipCoords, setCoords, hit, isSunk
    }
};