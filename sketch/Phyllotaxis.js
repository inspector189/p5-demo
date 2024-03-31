var n = 0;
var cSlider;
var anSlider;
var cValueLabel;
var anValueLabel;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    colorMode(HSB, 360);
    background(0);
    
    var controls = createDiv('');
    controls.position(495, 240);
    
    var cLabel = createP('c (scaling pattern) value:');
    cLabel.parent(controls);
    cSlider = createSlider(1, 20, 2, 1);
    cSlider.parent(controls);
    cValueLabel = createP('c value: ' + cSlider.value());
    cValueLabel.parent(controls);
    
    var anLabel = createP('select your pattern');
    anLabel.parent(controls);
    anSlider = createSlider(-360, 360, 137.5, 0.5);
    anSlider.parent(controls);
    anValueLabel = createP('an value: ' + anSlider.value());
    anValueLabel.parent(controls);
    
    var startButton = createButton('START');
    startButton.parent(controls);
    startButton.mousePressed(startDrawing);
    
}

function draw() {
    updateLabels();
    var c = cSlider.value();
    var angle2 = anSlider.value();
    var a = n * angle2;
    var r = c * sqrt(n);
    var x = r * cos(a) + width / 2;
    var y = r * sin(a) + height / 2;
    fill(r % 256, 255, 255);
    ellipse(x, y, 4, 4);

    n++;
}

function startDrawing() {
    n = 0;
    background(0);
}

function updateLabels() {
    cValueLabel.html('c value: ' + cSlider.value());
    anValueLabel.html('an value: ' + anSlider.value());
}
