let s;
let scl = 20;
let food;

function setup() {
  createCanvas(400, 400);
  s = new Snake();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  let cols = floor(width / scl);
  let rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(0);
  if (s.eat(food)) {
    pickLocation();
  }
  s.update();
  s.show();
  if(s.death())
  {
    print("END GAME!");
    background(209, 73, 73);
    noLoop();
    food = color(209, 73, 73);  
    textFont('Courier New' , 40);
    textAlign(CENTER, CENTER);
    fill(0);  
    strokeWeight(2.5);
    stroke(0);
    text('GAME OVER', 200, 200);
    resetButton = createButton('RESET');
    resetButton.position(175, 450);
    resetButton.size(100, 35);
    resetButton.style('font-weight', 'bold');
    resetButton.style('background-color', 'rgb(60, 60, 60)');
    resetButton.style('border', '3px solid black');
    resetButton.style('color', "white")
    resetButton.mousePressed(resetGame);
  }
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}
function resetGame() {
    // Resetujemy wszystkie wartości do stanu początkowego
    resetButton.hide();
    s = new Snake();
    pickLocation();
    loop(); // Wznawiamy pętlę rysowania
  }