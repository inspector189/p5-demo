var d = 8;
var n = 5;
var sliderD;
var sliderN;
var sliderColor;
var weightStrokeSlider;
var fovSlider;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360);

  var controls = createDiv('');
  controls.position(495, 200);

  var dLabel = createP('D (denominator) value:');
  dLabel.parent(controls);
  sliderD = createSlider(1, 20, 19, 1);
  sliderD.parent(controls);

  var nLabel = createP('N (numerator) value:');
  nLabel.parent(controls);
  sliderN = createSlider(1, 20, 20, 1);
  sliderN.parent(controls);

  var colorLabel = createP('Vertex color:');
  colorLabel.parent(controls);
  sliderColor = createSlider(0, 360, 0, 0);
  sliderColor.parent(controls);

  var weightStrokeLabel = createP('Stroke weight:');
  weightStrokeLabel.parent(controls);
  weightStrokeSlider = createSlider(1, 55, 0, 0);
  weightStrokeSlider.parent(controls);

  var fovLabel = createP("Radius value: ");
  fovLabel.parent(controls);
  fovSlider = createSlider(10, 300, 150, 0);
  fovSlider.parent(controls);

  sliderD.input(draw);
  sliderN.input(draw);
  sliderColor.input(draw);
  fovSlider.input(draw);
  weightStrokeSlider.input(draw);  
}

function draw() {
  d = sliderD.value();
  n = sliderN.value();
  var k = n/d;
  var fov = fovSlider.value();
  var hue = sliderColor.value();
  var strWeight = weightStrokeSlider.value();
  background(0);
  translate(width/2, height/2);
  beginShape();
  noFill();
  strokeWeight(strWeight);
  for(var a = 0; a < TWO_PI * d; a += 0.02) {
    var r = fov * cos(k * a);
    var x = r * cos(a);
    var y = r * sin(a);
    stroke(hue, 255, 255);
    strokeWeight(strWeight);
    vertex(x,y);
  }
  endShape(CLOSE);
}
