class protagonist {
  constructor(x, y, cu, feSp) {
    this.xRun = x;
    this.yPos = y;
    this.cube = cu;
    this.yLeft = this.yPos + this.cube * 14;
    this.yRight = this.yPos + this.cube * 13;
    this.yLeftSp = feSp;
    this.yRightSp = -feSp;
    this.ySpeed = 0;
    this.r = 105;
    this.g = 69;
    this.b = 130;
  }


  botsing(c) {

    if (!(poppetje.xRun - 2 * poppetje.cube > c.xCandy + 10 * c.cube ||
        c.yCandy - c.cube > poppetje.yPos + 14 * poppetje.cube ||
        c.xCandy - 3 * c.cube > poppetje.xRun + 5 * poppetje.cube ||
        poppetje.yPos > c.yCandy + 12 * c.cube)) {
      gameOver = true;
    }
  }

  costume() {

    noStroke();
    fill(86, 34, 0); //haar
    rect(this.xRun - this.cube, this.yPos + this.cube, this.cube, this.cube);
    rect(this.xRun + 2 * this.cube, this.yPos + 2 * this.cube, 2 * this.cube, this.cube);
    rect(this.xRun + 2 * this.cube, this.yPos + this.cube, this.cube, this.cube);
    rect(this.xRun, this.yPos + 2 * this.cube, 2 * this.cube, 2 * this.cube);
    rect(this.xRun - this.cube, this.yPos + 4 * this.cube, 2 * this.cube, 2 * this.cube);
    rect(this.xRun - 2 * this.cube, this.yPos + 5 * this.cube, this.cube, 2 * this.cube);
    rect(this.xRun - 3 * this.cube, this.yPos + 6 * this.cube, this.cube, 2 * this.cube);
    rect(this.xRun - 5 * this.cube, this.yPos + 7 * this.cube, 2 * this.cube, this.cube);
    fill(this.r, this.g, this.b); //huid
    rect(this.xRun + 2 * this.cube, this.yPos + 3 * this.cube, 2 * this.cube, 3 * this.cube);
    rect(this.xRun + this.cube, this.yPos + 4 * this.cube, 2 * this.cube, 3 * this.cube);
    rect(this.xRun + 5 * this.cube, this.yPos + 8 * this.cube, this.cube, this.cube);
    rect(this.xRun - this.cube, this.yPos + 9 * this.cube, this.cube, this.cube);
    rect(this.xRun + 0.2 * this.cube, this.yLeft, this.cube, 2 * this.cube); //feet
    rect(this.xRun + 2.8 * this.cube, this.yRight, this.cube, 2 * this.cube); //feet
    fill(0); //zwart    
    rect(this.xRun + 2.5 * this.cube, this.yPos + 4 * this.cube, 0.7 * this.cube, 0.7 * this.cube);
    fill(237, 212, 49); //kleding
    rect(this.xRun, this.yPos, 2 * this.cube, 2 * this.cube);
    rect(this.xRun - 2 * this.cube, this.yPos + 2 * this.cube, 2 * this.cube, 2 * this.cube);
    rect(this.xRun, this.yPos + 7 * this.cube, 4 * this.cube, 2 * this.cube);
    rect(this.xRun - this.cube, this.yPos + 8 * this.cube, this.cube, this.cube);
    rect(this.xRun + 3 * this.cube, this.yPos + 8 * this.cube, 2 * this.cube, this.cube);
    rect(this.xRun + this.cube, this.yPos + 9 * this.cube, 2 * this.cube, 2 * this.cube);
    rect(this.xRun, this.yPos + 11 * this.cube, 4 * this.cube, this.cube);
    rect(this.xRun - this.cube, this.yPos + 12 * this.cube, 6 * this.cube, 2 * this.cube);
    rect(this.xRun - 4 * this.cube, this.yPos + 6 * this.cube, this.cube, this.cube);
    rect(this.xRun - 3 * this.cube, this.yPos + 7 * this.cube, this.cube, this.cube);
    fill(255, 165, 35); //schaduw kleding
    rect(this.xRun, this.yPos + this.cube, this.cube, this.cube);
    rect(this.xRun - this.cube, this.yPos + 2 * this.cube, this.cube, this.cube);
    rect(this.xRun - this.cube, this.yPos + 8 * this.cube, this.cube, this.cube);
    rect(this.xRun, this.yPos + 7 * this.cube, this.cube, this.cube);
    rect(this.xRun + this.cube, this.yPos + 9 * this.cube, this.cube, 2 * this.cube);
    rect(this.xRun, this.yPos + 11 * this.cube, this.cube, this.cube);
    rect(this.xRun - this.cube, this.yPos + 12 * this.cube, this.cube, 2 * this.cube);
  }

  move() {
    if (this.yPos < 320) {
      this.ySpeed += 0.8;
      onGround = false;
    } else {
      this.ySpeed = 0;
      onGround = true;
    }

    // springen
    if (keyIsDown(UP_ARROW) || mouseIsPressed) {
      if (onGround) {
        this.ySpeed -= 12;
      }
    }
    this.yPos += this.ySpeed;


    if (onGround) {
      // rechtervoet beweegt
      if (this.yRight >= this.yPos + this.cube * 14 || this.yRight <= this.yPos + this.cube * 13) {
        this.yRightSp = -this.yRightSp;
      }
      this.yRight += this.yRightSp;

      // linkervoet beweegt
      if (this.yLeft >= this.yPos + this.cube * 14 || this.yLeft <= this.yPos + this.cube * 13) {
        this.yLeftSp = -this.yLeftSp;
      }
      this.yLeft += this.yLeftSp;
    } // in de lucht voeten stil
    else {
      this.yLeft = this.yPos + this.cube * 13.5
      this.yRight = this.yPos + this.cube * 13.5
    }
  }
}
