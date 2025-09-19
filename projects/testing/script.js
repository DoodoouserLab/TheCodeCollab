const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let imageX = 0;
let imageY = 0;
let isDragging = false;

const movingImage = new Image();
movingImage.src = 'your-image.png'; // Replace with your PNG file

// Object to store the image's state
let imageState = {
  x: 50,
  y: 50,
  width: 100,
  height: 100,
};

movingImage.onload = function() {
  draw();
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(movingImage, imageState.x, imageState.y, imageState.width, imageState.height);
}

// Event listeners for dragging
canvas.addEventListener('mousedown', (e) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  // Check if the mouse is inside the image
  if (mouseX >= imageState.x && mouseX <= imageState.x + imageState.width &&
      mouseY >= imageState.y && mouseY <= imageState.y + imageState.height) {
    isDragging = true;
  }
});

canvas.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    imageState.x = mouseX - imageState.width / 2;
    imageState.y = mouseY - imageState.height / 2;
    draw(); // Redraw the canvas
  }
});

canvas.addEventListener('mouseup', () => {
  isDragging = false;
});
