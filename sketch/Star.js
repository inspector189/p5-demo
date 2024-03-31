class Star {
    constructor()
    {
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.z = random(width);
        this.pz = this.z;
    }
    update()
    {
        this.z = this.z - speed;
        if(this.z < 1)
        {
            this.z = width;
            this.x = random(-width, width);
            this.y = random(-height, height);
            this.pz = this.z;
        }
    }
    show()
    {
        fill(255);
        noStroke();

        var sx = map(this.x/this.z, 0, 1, 0, width);
        var sy = map(this.y/this.z, 0, 1, 0, height);
        var r = map(this.z, 0, width, 16, 0);
        ellipse(sx, sy, r/2, r/2);
        var px = map(this.x/this.pz, 0, 1, 0, width);
        var py = map(this.y/this.pz, 0, 1, 0, height);
        this.pz = this.z;
        strokeWeight(r/2); 
        stroke(255,255,255, 120);
          line(px,py,sx,sy);

          strokeWeight(r/2); 
          stroke(255,0,255, 120);
          line(px*.8,py*.8,sx *1,sy *1);
  
          strokeWeight(r/2.4); 
          stroke(0,0,255, 120);
          line(px*.7,py*.7,sx*.9,sy*.9);
  
          strokeWeight(r/2.8); 
         stroke(0,255,255, 120);
          line(px*.6,py*.6,sx*.8,sy*.8);
  
          strokeWeight(r/3.2); 
          stroke(0,255,0, 120);
          line(px*.5,py*.5,sx*.7,sy*.7);
  
          strokeWeight(r/3.6); 
          stroke(255,255,0, 120);
          line(px*.4,py*.4,sx*.6,sy*.6);
  
          strokeWeight(r/4); 
          stroke(255,0,0, 120);
          line(px*.3,py*.3,sx*.5,sy*.5);
  
          strokeWeight(r/2); 
          stroke(255,255,255, 255);
    }
}