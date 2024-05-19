const canvas = document.getElementById('drawingArea');
const ctx = canvas.getContext('2d');

let isDrawing = false;

canvas.addEventListener('mousedown', () => {
    isDrawing = true
})
canvas.addEventListener('mouseup', () => {
    isDrawing = false
})

const trackMousePath = () => {
    let prevX;
    let prevY;
    return (event) => {
        if (!isDrawing) return;
        const x = event.clientX - canvas.offsetLeft;
        const y = event.clientY - canvas.offsetTop;
        if (isDrawing) {
            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(x, y);
            
            const hue = Math.random() * 360;
            ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
            ctx.stroke();
        }``
        prevX = x;
        prevY = y;
    };
};

const drawPath = trackMousePath();

canvas.addEventListener('mousemove', (event) => {
    drawPath(event);
});