var angle = 0;
points = [];
function setup()
{
    createCanvas(600, 400, P2D);
    points[0] = createVector(-0.5, -0.5, -0.5);
    points[1] = createVector(0.5, -0.5, -0.5);
    points[2] = createVector(0.5, 0.5, -0.5);
    points[3] = createVector(-0.5,0.5, -0.5);
    points[4] = createVector(-0.5, -0.5, 0.5);
    points[5] = createVector(0.5, -0.5, 0.5);
    points[6] = createVector(0.5, 0.5, 0.5);
    points[7] = createVector(-0.5 ,0.5, 0.5);
}
function draw()
{
    background(0);
    translate(width/2, height/2);
    stroke(255);
    strokeWeight(16);
    noFill();

    const rotationX = [
        [1, 0, 0],
        [0, cos(angle), -sin(angle)],
        [0, sin(angle), cos(angle)],
    ];

    const rotationY = [
        [cos(angle), 0, -sin(angle)],
        [0, 1, 0],
        [sin(angle), 0, cos(angle)],
    ];

    const rotationZ = [
        [cos(angle), -sin(angle), 0],
        [sin(angle), cos(angle), 0],
        [0, 0, 1],
    ];
    let projected = [];

    for(let i = 0; i < points.length; i++)
    {
        let rotated = matmul(rotationY, points[i]);
        rotated = matmul(rotationX, rotated);
        rotated = matmul(rotationZ, rotated);
        let distance = 3;
        let z = 1 / (distance - rotated.z);
        const projection = [
            [z, 0, 0],
            [0, z, 0],
        ];
        let projected2d = matmul(projection, rotated);
        projected2d.mult(200);
        projected[i] = projected2d;
    }
    for(let i = 0; i < projected.length; i++)
    {
        stroke(255);
        strokeWeight(16);
        noFill();
        const v = projected[i];
       // point(v.x, v.y);
    }
    
    for(let i = 0; i < 4; i++)
    {
        connect(i, (i + 1) % 4, projected);
        connect(i + 4, ((i + 1) % 4) + 4, projected);
        connect(i, i + 4, projected);
    }
    angle += 0.02;
}
function connect(i, j, points)
{
    const a = points[i];
    const b = points[j];
    strokeWeight(4);
    stroke(150, 215, 123);
    line(a.x, a.y, b.x, b.y);
}
