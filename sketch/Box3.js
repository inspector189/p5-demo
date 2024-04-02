class Box3 {
    constructor(x, y, z, r_) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.pos = createVector(x, y, z);
        this.r = r_;

    }
    show()
    {
        push();
        translate(this.pos.x, this.pos.y, this.pos.z);
        noStroke();
        fill(255, 153, 102);
        box(this.r);
        pop();
    }
    generate()
    {
        let boxes = [];
        for(var x = -2; x < 3; x++)
        {
            for(var y = -2; y < 3; y++)
            {
                for(var z = -2; z < 3; z++)
                {
                    let sum = abs(x) + abs(y) + abs(z);
                    let newR = this.r/5;
                    if(sum > 3)
                    {
                        b = new Box3(
                            this.pos.x + x * newR,
                            this.pos.y + y * newR,
                            this.pos.z + z * newR, newR
                        );
                        boxes.push(b);
                    }
                }
            }
        }
        return boxes;
    }
}