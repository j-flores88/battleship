export const Ship = (name, length, sunk, startCoord, vertical = false) => {

    const shipCoord = (startCoord) => {
        const shipCoord = [];
        if(vertical) {
            for(let i = 0; i < length; i++) {
                shipCoord.push(startCoord + i * 10)
            } 
        } else {
            for(let i = 0; i < length; i++) {
                shipCoord.push(startCoord + i)
            }
        }
        return shipCoord
    }

    return {
        name, length, sunk, startCoord, vertical, shipCoord
    }
};