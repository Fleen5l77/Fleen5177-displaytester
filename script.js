const screen = document.getElementById('screen');
const colors = ['#ff0000', '#ff0000', '#00ff00', '#0000ff', '#fff', '#000', '#808080', '#a9a9a9', '#d3d3d3']; 
let currentColorIndex = 0;

screen.addEventListener('click', () => {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    screen.style.backgroundColor = colors[currentColorIndex];

    if (currentColorIndex === colors.length - 1) {
        setTimeout(() => {
            window.location.href = 'main.html';
        }, 1000); 
    }
});
