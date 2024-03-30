var x= 0;
var y = 0;
let gradientColors = []; // Array to hold gradient colors
let currentGradientIndex = 0;
function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    background(0);
    initializeGradientColors();
    background(random(0,10));
    setInterval(changeGradient, 3000);
}
function nextPoint()
{
    var nextX;
    var nextY;
    var r = random(1);
    if(r < 0.01)
    {
        nextX = 0;
        nextY = 0.16 * y; 
    } else if(r < 0.86)
    {
        nextX = 0.85 * x + 0.04  * y;
        nextY = -0.04 * x + 0.85  * y + 1.6;
    }
    else if(r < 0.93)
    {
        nextX = 0.2 * x  + -0.26  * y;
        nextY = 0.23 * x + 0.22  * y + 1.6;
    }
    else {
        nextX = -0.15 * x + 0.28  * y;
        nextY =  0.26 * x + 0.24  * y + 0.44;
    }
    x = nextX;
    y = nextY;
}
// -2.1820 < x < 2.6558 and 0 <= y < 9.9983
function drawPoint()
{
    let currentColor = gradientColors[currentGradientIndex];

    // Draw a point with the current gradient color
    stroke(currentColor);
    strokeWeight(1);
    var px = map(x, -2.1820, 2.6558, 0, width)
    var py = map(y, 0, 9.9983, height, 0)
    point(px,py);
}
function draw() {
    for(var i = 0; i < 100; i++)
    {
        drawPoint();
        nextPoint();
    }
}
function initializeGradientColors() {
    gradientColors.push(color(34, 139, 34)); // Green
    gradientColors.push(color(255, 69, 0)); // Red-Orange
    gradientColors.push(color(0, 128, 128)); // Teal
    gradientColors.push(color(255, 215, 0)); // Gold
  }
  
  // Function to change the gradient
  function changeGradient() {
    currentGradientIndex = (currentGradientIndex + 1) % gradientColors.length;
  }
