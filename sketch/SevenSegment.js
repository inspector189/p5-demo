function setup()
{
    createCanvas(400, 400);
}
function draw()
{
    background(220);
    sevenSegment();
}
function sevenSegment()
{
    push();
    stroke(0);
    noFill();
    fill(255);
    rect(60, 20, 78, 18);
    rect(140, 40, 18, 98);
    rect(140, 160, 18, 98);
    rect(60, 260, 78, 18);
    rect(40, 160, 18, 98);
    rect(40, 40, 18, 98);
    rect(60, 140, 78, 18);
    pop();
}