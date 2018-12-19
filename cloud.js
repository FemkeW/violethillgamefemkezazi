class Cloud1 {
  constructor(x1, y1, x2, y2, x3, y3, x4, y4) {
    this.xCloud = x1;
    this.yCloud = y1;
    this.cube = 8;
    this.xCloud2 = x2;
    this.yCloud2 = y2;
    this.xCloud3 = x3;
    this.yCloud3 = y3;
    this.xCloud4 = x4;
    this.yCloud4 = y4;
    this.xSpeed = 4;
  }

  display() {

    noStroke() //WOLK1
    fill(255, 255, 255); // wit wolk1
    rect(this.xCloud, this.yCloud, this.cube * 3, this.cube * 3);
    rect(this.xCloud - this.cube, this.yCloud + 2 * this.cube, this.cube, this.cube);
    rect(this.xCloud, this.yCloud + 3 * this.cube, this.cube * 2, this.cube);
    rect(this.xCloud + 3 * this.cube, this.yCloud, this.cube, this.cube * 2);
    rect(this.xCloud + 4 * this.cube, this.yCloud, this.cube * 2, this.cube);
    rect(this.xCloud + 4 * this.cube, this.yCloud + this.cube, this.cube * 3, this.cube * 3);
    rect(this.xCloud + 7 * this.cube, this.yCloud + 2 * this.cube, this.cube, this.cube * 2);
    rect(this.xCloud + 3 * this.cube, this.yCloud + 4 * this.cube, this.cube * 3, this.cube * 4);
    rect(this.xCloud + 6 * this.cube, this.yCloud + 4 * this.cube, this.cube, this.cube);
    rect(this.xCloud + 2 * this.cube, this.yCloud + 5 * this.cube, this.cube, this.cube * 2); //10
    rect(this.xCloud + 3 * this.cube, this.yCloud + 8 * this.cube, this.cube, this.cube);
    rect(this.xCloud + 4 * this.cube, this.yCloud + 8 * this.cube, this.cube * 7, this.cube * 4);
    rect(this.xCloud + 7 * this.cube, this.yCloud + 6 * this.cube, this.cube, this.cube * 2);
    rect(this.xCloud + 8 * this.cube, this.yCloud + 5 * this.cube, this.cube * 4, this.cube * 3);
    rect(this.xCloud + 9 * this.cube, this.yCloud + 4 * this.cube, this.cube * 2, this.cube);
    rect(this.xCloud + 12 * this.cube, this.yCloud + 6 * this.cube, this.cube, this.cube * 4);
    rect(this.xCloud + 11 * this.cube, this.yCloud + 8 * this.cube, this.cube, this.cube * 4);
    rect(this.xCloud + 2 * this.cube, this.yCloud + 10 * this.cube, this.cube * 2, this.cube * 2);
    rect(this.xCloud - this.cube, this.yCloud + 8 * this.cube, this.cube * 2, this.cube);
    rect(this.xCloud - 3 * this.cube, this.yCloud + 9 * this.cube, this.cube * 5, this.cube * 3); //20
    rect(this.xCloud - 4 * this.cube, this.yCloud + 10 * this.cube, this.cube, this.cube);
    rect(this.xCloud - 2 * this.cube, this.yCloud + 12 * this.cube, this.cube, this.cube);
    rect(this.xCloud - this.cube, this.yCloud + 12 * this.cube, this.cube * 4, this.cube * 2);
    rect(this.xCloud + 3 * this.cube, this.yCloud + 12 * this.cube, this.cube, this.cube);
    rect(this.xCloud + 5 * this.cube, this.yCloud + 12 * this.cube, this.cube * 6, this.cube); //25
    rect(this.xCloud + 12 * this.cube, this.yCloud + 11 * this.cube, this.cube, this.cube * 2);
    rect(this.xCloud + 14 * this.cube, this.yCloud + 10 * this.cube, this.cube * 2, this.cube);
    rect(this.xCloud + 13 * this.cube, this.yCloud + 11 * this.cube, this.cube * 5, this.cube * 3);
    rect(this.xCloud + 18 * this.cube, this.yCloud + 12 * this.cube, this.cube * 2, this.cube * 2);
    rect(this.xCloud + 20 * this.cube, this.yCloud + 13 * this.cube, this.cube * 2, this.cube); //30

    fill(195, 223, 247) // blauw wolk1
    rect(this.xCloud - this.cube, this.yCloud + 10, this.cube, this.cube);
    rect(this.xCloud - 2 * this.cube, this.yCloud + 2 * this.cube, this.cube, this.cube);
    rect(this.xCloud - 2 * this.cube, this.yCloud + 3 * this.cube, this.cube * 2, this.cube * 2);
    rect(this.xCloud, this.yCloud + 4 * this.cube, this.cube * 2, this.cube * 4);
    rect(this.xCloud + 2 * this.cube, this.yCloud + 3 * this.cube, this.cube, this.cube * 2); //5
    rect(this.xCloud + 3 * this.cube, this.yCloud + 2 * this.cube, this.cube, this.cube * 2);
    rect(this.xCloud - this.cube, this.yCloud + 6 * this.cube, this.cube, this.cube * 2);
    rect(this.xCloud + this.cube, this.yCloud + 8 * this.cube, this.cube, this.cube);
    rect(this.xCloud + this.cube * 2, this.yCloud + 7 * this.cube, this.cube, this.cube * 3);
    rect(this.xCloud + this.cube * 3, this.yCloud + 9 * this.cube, this.cube, this.cube); //10
    rect(this.xCloud - 3 * this.cube, this.yCloud + 7 * this.cube, this.cube * 2, this.cube * 2);
    rect(this.xCloud - 4 * this.cube, this.yCloud + 8 * this.cube, this.cube, this.cube * 2);
    rect(this.xCloud - 5 * this.cube, this.yCloud + 9 * this.cube, this.cube, this.cube);
    rect(this.xCloud - 6 * this.cube, this.yCloud + this.cube * 10, this.cube * 2, this.cube * 2);
    rect(this.xCloud - 4 * this.cube, this.yCloud + 11 * this.cube, this.cube, this.cube); //15
    rect(this.xCloud - 5 * this.cube, this.yCloud + 12 * this.cube, this.cube * 3, this.cube * 3);
    rect(this.xCloud - 8 * this.cube, this.yCloud + 13 * this.cube, this.cube * 3, this.cube * 2);
    rect(this.xCloud - 9 * this.cube, this.yCloud + 14 * this.cube, this.cube, this.cube);
    rect(this.xCloud - 2 * this.cube, this.yCloud + 13 * this.cube, this.cube, this.cube * 2);
    rect(this.xCloud - this.cube, this.yCloud + 14 * this.cube, this.cube * 4, this.cube); //20
    rect(this.xCloud + 4 * this.cube, this.yCloud + 12 * this.cube, this.cube, this.cube);
    rect(this.xCloud + 3 * this.cube, this.yCloud + 13 * this.cube, this.cube * 10, this.cube * 2);
    rect(this.xCloud + 11 * this.cube, this.yCloud + 12 * this.cube, this.cube, this.cube);
    rect(this.xCloud + 12 * this.cube, this.yCloud + 10 * this.cube, this.cube * 2, this.cube);
    rect(this.xCloud + 13 * this.cube, this.yCloud + 9 * this.cube, this.cube * 2, this.cube); //25
    rect(this.xCloud + 13 * this.cube, this.yCloud + 14 * this.cube, this.cube * 9, this.cube);
    rect(this.xCloud + 6 * this.cube, this.yCloud + 5 * this.cube, this.cube, this.cube * 3);
    rect(this.xCloud + 7 * this.cube, this.yCloud + 4 * this.cube, this.cube, this.cube * 2);
    rect(this.xCloud + 8 * this.cube, this.yCloud + 4 * this.cube, this.cube, this.cube);

    noStroke() //WOLK2
    fill(255, 255, 255); // wit wolk2    
    rect(this.xCloud2 + this.cube, this.yCloud2, this.cube * 2, this.cube);
    rect(this.xCloud2, this.yCloud2 + 2 * this.cube, this.cube, this.cube * 2);
    rect(this.xCloud2 - 2 * this.cube, this.yCloud2 + 6 * this.cube, this.cube, this.cube);
    rect(this.xCloud2 - this.cube, this.yCloud2 + 5 * this.cube, this.cube * 2, this.cube * 2);
    rect(this.xCloud2 + this.cube, this.yCloud2 + this.cube, this.cube * 3, this.cube * 6); //5
    rect(this.xCloud2 + 4 * this.cube, this.yCloud2 + 3 * this.cube, this.cube, this.cube * 2);
    rect(this.xCloud2 + 5 * this.cube, this.yCloud2 + 2 * this.cube, this.cube * 2, this.cube * 2);
    rect(this.xCloud2 + 7 * this.cube, this.yCloud2 + 2 * this.cube, this.cube, this.cube * 2);
    rect(this.xCloud2 + 6 * this.cube, this.yCloud2 + 6 * this.cube, this.cube, this.cube);
    rect(this.xCloud2 + 7 * this.cube, this.yCloud2 + 4 * this.cube, this.cube * 3, this.cube * 3); //10 
    rect(this.xCloud2 + this.cube * 10, this.yCloud2 + 6 * this.cube, this.cube, this.cube);
    rect(this.xCloud2 - 9 * this.cube, this.yCloud2 + 5 * this.cube, this.cube * 2, this.cube);
    rect(this.xCloud2 - 8 * this.cube, this.yCloud2 + 6 * this.cube, this.cube * 4, this.cube);
    rect(this.xCloud2 - 5 * this.cube, this.yCloud2 + 5 * this.cube, this.cube * 2, this.cube);

    fill(195, 223, 247) // blauw wolk2 
    rect(this.xCloud2 - 12 * this.cube, this.yCloud2 + 7 * this.cube, this.cube, this.cube);
    rect(this.xCloud2 - 10 * this.cube, this.yCloud2 + 5 * this.cube, this.cube, this.cube);
    rect(this.xCloud2 - 11 * this.cube, this.yCloud2 + 6 * this.cube, this.cube * 3, this.cube * 2);
    rect(this.xCloud2 - 8 * this.cube, this.yCloud2 + 7 * this.cube, this.cube * 19, this.cube);
    rect(this.xCloud2 - 4 * this.cube, this.yCloud2 + 6 * this.cube, this.cube * 2, this.cube); //5   
    rect(this.xCloud2 - 3 * this.cube, this.yCloud2 + 5 * this.cube, this.cube * 2, this.cube);
    rect(this.xCloud2 - 6 * this.cube, this.yCloud2 + 5 * this.cube, this.cube, this.cube);
    rect(this.xCloud2 - 5 * this.cube, this.yCloud2 + 4 * this.cube, this.cube * 2, this.cube);
    rect(this.xCloud2 - 3 * this.cube, this.yCloud2 + 3 * this.cube, this.cube * 3, this.cube * 2);
    rect(this.xCloud2, this.yCloud2 + 4 * this.cube, this.cube, this.cube); //10
    rect(this.xCloud2 - 2 * this.cube, this.yCloud2 + 2 * this.cube, this.cube * 2, this.cube);
    rect(this.xCloud2 - this.cube, this.yCloud2 + this.cube, this.cube * 2, this.cube);
    rect(this.xCloud2, this.yCloud2, this.cube, this.cube);
    rect(this.xCloud2 + 4 * this.cube, this.yCloud2 + 5 * this.cube, this.cube * 2, this.cube * 2);
    rect(this.xCloud2 + 5 * this.cube, this.yCloud2 + 4 * this.cube, this.cube * 2, this.cube); //15
    rect(this.xCloud2 + 6 * this.cube, this.yCloud2 + 5 * this.cube, this.cube, this.cube);

    noStroke() //WOLK3
    fill(255, 255, 255); // wit wolk3     
    rect(this.xCloud3 + this.cube, this.yCloud3, this.cube, this.cube);
    rect(this.xCloud3 + this.cube * 2, this.yCloud3 + this.cube, this.cube, this.cube);

    fill(195, 223, 247) // blauw wolk2 
    rect(this.xCloud3, this.yCloud3, this.cube, this.cube);
    rect(this.xCloud3 - this.cube, this.yCloud3 + this.cube, this.cube * 3, this.cube);

    noStroke() //WOLK4
    fill(255, 255, 255); // wit wolk4    
    rect(this.xCloud4, this.yCloud4, this.cube * 2, this.cube);
    rect(this.xCloud4, this.yCloud4 + this.cube, this.cube * 3, this.cube);

    fill(195, 223, 247) // blauw wolk2 
    rect(this.xCloud4 - this.cube, this.yCloud4 + this.cube, this.cube, this.cube);
    rect(this.xCloud4 - this.cube, this.yCloud4 + 2 * this.cube, this.cube * 4, this.cube);

  }

  move() {

    if (this.xCloud + 22 * this.cube < 0) {
      this.xCloud = width + 13 * this.cube
    }

    if (this.xCloud2 + 22 * this.cube < 0) {
      this.xCloud2 = width + 13 * this.cube
    }

    if (this.xCloud3 + 22 * this.cube < 0) {
      this.xCloud3 = width + 13 * this.cube
    }

    if (this.xCloud4 + 22 * this.cube < 0) {
      this.xCloud4 = width + 13 * this.cube
    }

    this.xSpeed += 0.0031
    this.xCloud -= this.xSpeed;
    this.xCloud2 -= this.xSpeed;
    this.xCloud3 -= this.xSpeed;
    this.xCloud4 -= this.xSpeed;



  }

}
