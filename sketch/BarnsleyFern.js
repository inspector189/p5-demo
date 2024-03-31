var x= 0;
var y = 0;
let gradientColors = []; // Array to hold gradient colors
let currentGradientIndex = 0;
var colors;
function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    background(0);

   var controls = createDiv('');
    controls.position(495, 240);
    colors = createColorPicker('purple');
    colorLabel = createP("Color 1: " + colors.color());
    colorLabel.parent(controls);
    colors.parent(controls);
    colors.input(updateColor); 
    colors2 = createColorPicker('blue');
    color2Label = createP("Color 2: " + colors2.color()); 
    color2Label.parent(controls);
    colors2.parent(controls);
    colors2.input(updateColor);
    colors3 = createColorPicker('cyan');
    color3Label = createP("Color 3: " + colors3.color()); 
    color3Label.parent(controls);
    colors3.parent(controls);
    colors3.input(updateColor);
    colors4 = createColorPicker('pink');
    color4Label = createP("Color 4: " + colors4.color()); 
    color4Label.parent(controls);
    colors4.parent(controls);
    colors4.input(updateColor);
    initializeGradientColors();
    background(random(0,10));
    setInterval(changeGradient, 1000);
}

function updateColor() {
    colorLabel.html("Color 1: " + colors.color()); 
    color2Label.html("Color 2: " + colors2.color()); 
    color3Label.html("Color 3: " + colors3.color()); 
    color4Label.html("Color 4: " + colors4.color()); 
    gradientColors[0] = color(colors.color());
    gradientColors[1] = color(colors2.color());
    gradientColors[2] = color(colors3.color());
    gradientColors[3] = color(colors4.color());
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
    gradientColors.push(color(colors.color())); 
    gradientColors.push(color(colors2.color())); 
    gradientColors.push(color(colors3.color())); 
    gradientColors.push(color(colors4.color())); 
  }
  
  function changeGradient() {
    currentGradientIndex = (currentGradientIndex + 1) % gradientColors.length;
  }