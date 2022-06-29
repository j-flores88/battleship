export const createGrid = (x, y, container) => {
    let arrY = new Array();
    let arrX;

    for(let iy = 0; iy < y; iy++) {
        arrX = new Array();
        for(let ix = 0; ix < x; ix++) {
            arrX[ix] = '<div class="cell">&nbsp;</div>';
        };
        arrY[iy] = '<div class="row">'+ arrX.join('\r\n') + '</div>'
    }
    container.innerHTML = arrY.join('\r\n');
};