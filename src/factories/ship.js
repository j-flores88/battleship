export const Ship = (name, length, startCoord, vertical = false) => {

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
        name, length, startCoord, vertical, shipCoord
    }
};