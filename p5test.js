// sketch to make a 8 x 8 chessboard 
// via nested loops and conditionals

// challenge: display a unique shape in each cell composed of multiple triangle 

// each triangle will be three random point inside the rect
// we want three random triangles in each rectangle

// store color names for triangles in array
color_names = ["Tomato", "DarkSlateBlue", "DeepPink", "MediumVioletRed", "Pink"];

function setup() {
  createCanvas(400, 400);
  background(220);
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 === 0) {
        fill(0);
        rect(i * 50, j * 50, 50, 50);
      } else {
        noStroke();
        fill(255);
        rect(i * 50, j * 50, 50, 50);
        // only generate triangles on white squares
        for(let k = 0; k < 50; k = k + 2){
          fill(random(color_names))
        triangle(random(i * 50, i * 50 + k), random(j * 50, j * 50 + k), random(i * 50, i * 50 + k), random(j * 50, j * 50 + k), i * 50 + k, j * 50 + k)
          
        }
      }
      
    }
  }
}

