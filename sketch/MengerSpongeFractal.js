let a = 0;
let b;
let c = 0;
let d = 0;
let e = 0;
let myBoxes = [];
let myBoxes2 = [];
let myBoxes3 = [];
let myBoxes4 = [];
function setup() {
    createCanvas(1000, 1000, WEBGL);
    normalMaterial();
    b = new Box(0,0,0, 200);
    p = new Box2(0,0,0, 200);
    m = new Box3(0,0,0, 200);
    n = new Box4(0,0,0, 200);
    myBoxes.push(b);
    myBoxes2.push(p);
    myBoxes3.push(m);
    myBoxes4.push(n);
}
function mousePressed()
{
    var next = [];
    for (var i = 0; i < myBoxes.length; i++) {
      var b = myBoxes[i];
      var newBoxes = b.generate();
      next = next.concat(newBoxes);
    }
    myBoxes = next;

    var next2 = [];
    for (var i = 0; i < myBoxes2.length; i++) {
      var p = myBoxes2[i];
      var newBoxes2 = p.generate();
      next2 = next2.concat(newBoxes2);
    }
    myBoxes2 = next2;

    var next3 = [];
    for (var i = 0; i < myBoxes3.length; i++) {
      var m = myBoxes3[i];
      var newBoxes3 = m.generate();
      next3 = next3.concat(newBoxes3);
    }
    myBoxes3 = next3;

    var next4 = [];
    for (var i = 0; i < myBoxes4.length; i++) {
      var n = myBoxes4[i];
      var newBoxes4 = n.generate();
      next4 = next4.concat(newBoxes4);
    }
    myBoxes4 = next4;
}
function draw() {
    background(0);
    stroke(255);
    noFill();
    lights();
    // Box 1 - blue
    push();
    translate(width/2 - 700, height/2 - 700);
    rotateX(a);
    rotateY(a * 0.1);
    rotateZ(a * 0.1);
    for (var i = 0; i < myBoxes.length; i++) {
        myBoxes[i].show();
      }
      pop();
    a += 0.01;
    // Box 2 - purple
    push();
    translate(width/2 - 250, height/2 - 700); 
    rotateX(c);
    rotateY(c);
    rotateZ(c);
    for (let i = 0; i < myBoxes2.length; i++) {
        myBoxes2[i].show();
    }
    pop();
    c += 0.005;
    // Box 3 - orange
    push();
    translate(width/2 - 700, height/2 - 200); 
    rotateX(d);
    rotateY(d);
    rotateZ(d);
    for (let i = 0; i < myBoxes3.length; i++) {
        myBoxes3[i].show();
    }
    pop();
    d += 0.005;
    //Box 4 - green
    push();
    translate(width/2 - 250, height/2 - 200); 
    rotateX(e);
    rotateY(e);
    rotateZ(e);
    for (let i = 0; i < myBoxes4.length; i++) {
        myBoxes4[i].show();
    }
    pop();
    e += 0.01;

}
