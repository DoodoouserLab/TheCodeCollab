const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let imageX = 0; // Initial X position
let imageY = 0; // Initial Y position

const movingImage = new Image();
movingImage.src = 'iamge.png'; // Replace with your PNG file

// Wait for the image to load before drawing
movingImage.onload = function() {
  draw();
};

function draw() {
  // Clear the entire canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the image at its current position
  ctx.drawImage(movingImage, imageX, imageY);
}

function moveImageTo(x, y) {
  imageX = x; // Update the image's X coordinate
  imageY = y; // Update the image's Y coordinate
  draw(); // Redraw the canvas with the new position
}
