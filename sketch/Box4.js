class Box4 {
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
        stroke(204, 255, 153);
        box(this.r);
        pop();
    }
    generate()
    {
        let boxes = [];
        for(var x = -1; x < 2; x++)
        {
            for(var y = -1; y < 2; y++)
            {
                for(var z = -1; z < 2; z++)
                {
                    let newR = this.r/3;
                        b = new Box4(
                            this.pos.x + x * newR,
                            this.pos.y + y * newR,
                            this.pos.z + z * newR, newR
                        );
                        boxes.push(b);
                    
                }
            }
        }
        return boxes;
    }
}