export const createGrid = (container) => {
    let arrY = new Array();
    let arrX;

    for(let iy = 0; iy < 10; iy++) {
        arrX = new Array();
        for(let ix = 0; ix < 10; ix++) {
            arrX[ix] = `<div class="cell" data=${iy}${ix}>${iy}${ix}</div>`;                 
        };
        arrY[iy] = '<div class="row">'+ arrX.join('\r\n') + '</div>'
    }
    container.innerHTML = arrY.join('\r\n');
};