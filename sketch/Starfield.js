let stars = [];
let speedValue;
let numberOfStars;


function setup() {
    canvas = createCanvas(800, 450);
    canvas.position(500, 100);
    angleMode(DEGREES);
    colorMode(HSB, 360);
    var controls = createDiv('');
    controls.position(800, 685);
    controls.size(200, 200);
    var numLabel = createP("Number Of Stars: ");
    numLabel.parent(controls);
    numberOfStars = createInput('');
    numberOfStars.parent(controls);
    numberOfStars.position(0, 25);
    var speedLabel = createP("Speed Value:");
    speedLabel.parent(controls);
    speedLabel.position(0, 65);
    speedValue = createInput('');
    speedValue.parent(controls);
    speedValue.position(0, 90);
    let button = createButton('Generate Stars');
    button.position(40, 135);
    button.size(100, 46)
    button.parent(controls);
    button.mousePressed(generateStars);
}

function generateStars() {
    // Usunięcie poprzednich gwiazd
    stars = [];

    // Odczytanie wartości wprowadzonej przez użytkownika
    let inputVal = int(numberOfStars.value());

    // Generowanie nowych gwiazd zgodnie z wprowadzoną liczbą
    for (let i = 0; i < inputVal; i++) {
        stars.push(new Star());
    }
}

function draw() {
    speed = map(mouseX, 0, width, 0, int(speedValue.value()));
    background(0);
    translate(width/2, height/2);
    for(var i = 0; i < stars.length; i++)
    {
        stars[i].update();
        stars[i].show();
    }
    
}
