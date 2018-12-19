var onGround;
var score = 0;
var highScore = 0;

function setup() {
  p5.disableFriendlyErrors = true
  createCanvas(900, 500);
  cloud = new Cloud1(100, 50, 450, 50, 400, 150, 300, 50);
  cloud2 = new Cloud1(676, 50, 1026, 50, 976, 150, 876, 50)
  poppetje = new protagonist(200, 320, 5, 0.8);
  ground = new Ground();
  candy1 = new candy(750, 370, 4, 2.5, 141, 226, 65, 201, 252, 156); //Groen
  candy2 = new candy(1050, 370, 4, 2.5, 242, 212, 19, 250, 255, 109); //Geel
  candy3 = new candy(1340, 370, 4, 2.5, 237, 92, 215, 255, 198, 246); //Roze
  candy4 = new candy(1650, 370, 4, 2.5, 41, 190, 232, 197, 236, 247); //Blauw
  candy5 = new candy(1880, 370, 4, 2.5, 187, 79, 209, 220, 162, 232); //Paars
  angel = new protagonistDead(200, 320, 8)
  gameOver = false;
  frameRate(1200);
}

function resetGame() {
  setup();
  score = 0;
}

function draw() {
  if (!gameOver) {
    background(86, 179, 255);
    cloud.display();
    cloud.move();
    cloud2.display();
    cloud2.move();
    poppetje.costume();
    poppetje.move();
    poppetje.botsing(candy1);
    poppetje.botsing(candy2);
    poppetje.botsing(candy3);
    poppetje.botsing(candy4);
    poppetje.botsing(candy5);
    ground.display();
    candy1.display();
    candy1.move();
    candy2.display();
    candy2.move();
    candy3.display();
    candy3.move();
    candy4.display();
    candy4.move();
    candy5.display();
    candy5.move();

    if (score <= 150 * 10 && !gameOver) {

      if (poppetje.yPos > 240) {
        fill(78, 158, 235);
      } else {
        fill(242, 179, 237);
      }
      noStroke();
      rect(170, 173, 460, 50);
      textSize(20);
      fill(0);
      textFont('Courier New');
      text('WATCH OUT! THE CANDIES ARE POISONOUS!', 180, 190);
      text('CLICK MOUSE OR UP ARROW TO JUMP', 180, 220)
    }
  } else {
    if (keyIsDown(32)) {
      resetGame();
    }
    background(0);
    textSize(60);
    fill(255);
    textFont('Courier New');
    text('GAME OVER', 280, 260);
    textSize(30);
    text('PRESS SPACEBAR TO TRY AGAIN', 210, 300);
     angel.display();
    angel.move(); 
  }

  if (score >= highScore) {
    highScore = score;
  }

  textSize(20);
  textFont('Courier New');
  fill(255);
  text('SCORE: ' + score / 10, 470, 35);
  text('SCORE: ' + score / 10, 470.5, 35.5);
  text('HIGHSCORE: ' + highScore / 10, 670, 35);
  text('HIGHSCORE: ' + highScore / 10, 670.5, 35.5);
}

class Ground {
  constructor() {
    this.GroundHeight = 100;
    this.GroundWidth = width;
    this.xGround = 0;
    this.yGround = height - this.GroundHeight;

  }

  display() {
    noStroke();
    fill(242, 179, 237);
    rect(this.xGround, this.yGround, this.GroundWidth, this.GroundHeight);
    stroke(237, 125, 227);
    strokeWeight(3);
    line(this.xGround, this.yGround, this.GroundWidth, this.yGround);
  }
}

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


class candy {
  constructor(x, y, s, c, a, b, d, e, f, g) {
    this.xCandy = x;
    this.yCandy = y;
    this.xSpeed = s;
    this.cube = c
    this.r1 = a;
    this.g1 = b;
    this.b1 = d;
    this.r2 = e;
    this.g2 = f;
    this.b2 = g;
  }

  display() {
    noStroke();
    fill(this.r1, this.g1, this.b1); //kleur 1
    rect(this.xCandy + 2 * this.cube, this.yCandy - this.cube, this.cube, this.cube);
    rect(this.xCandy + 3 * this.cube, this.yCandy - this.cube, 2 * this.cube, 2 * this.cube);
    rect(this.xCandy + 5 * this.cube, this.yCandy, 2 * this.cube, 3 * this.cube);
    rect(this.xCandy + 4 * this.cube, this.yCandy + this.cube, this.cube, 4 * this.cube);
    rect(this.xCandy + 5 * this.cube, this.yCandy + 3 * this.cube, this.cube, this.cube);
    rect(this.xCandy - 2 * this.cube, this.yCandy + 2 * this.cube, 2 * this.cube, this.cube);
    rect(this.xCandy - 2 * this.cube, this.yCandy + 3 * this.cube, this.cube, 3 * this.cube);
    rect(this.xCandy - 3 * this.cube, this.yCandy + 4 * this.cube, this.cube, 3 * this.cube);
    rect(this.xCandy, this.yCandy + 3 * this.cube, 2 * this.cube, 2 * this.cube);
    rect(this.xCandy + 2 * this.cube, this.yCandy + 4 * this.cube, this.cube, this.cube);
    rect(this.xCandy + 3 * this.cube, this.yCandy + 5 * this.cube, this.cube, this.cube);
    rect(this.xCandy, this.yCandy + 8 * this.cube, this.cube, 3 * this.cube);
    rect(this.xCandy + this.cube, this.yCandy + 7 * this.cube, this.cube, 4 * this.cube);
    rect(this.xCandy + 2 * this.cube, this.yCandy + 6 * this.cube, this.cube, 3 * this.cube);
    rect(this.xCandy + 4 * this.cube, this.yCandy + 6 * this.cube, 4 * this.cube, this.cube);
    rect(this.xCandy + 8 * this.cube, this.yCandy + 5 * this.cube, 2 * this.cube, 2 * this.cube);
    rect(this.xCandy + 9 * this.cube, this.yCandy + 4 * this.cube, this.cube, this.cube);
    rect(this.xCandy + 7 * this.cube, this.yCandy + 7 * this.cube, 2 * this.cube, 2 * this.cube);
    rect(this.xCandy + 6 * this.cube, this.yCandy + 7 * this.cube, this.cube, this.cube);
    rect(this.xCandy + 2 * this.cube, this.yCandy + 10 * this.cube, 2 * this.cube, 2 * this.cube);
    rect(this.xCandy + 4 * this.cube, this.yCandy + 11 * this.cube, this.cube, this.cube);

    fill(this.r2, this.g2, this.b2); // kleur 2
    rect(this.xCandy, this.yCandy, 3 * this.cube, this.cube);
    rect(this.xCandy - this.cube, this.yCandy + this.cube, 2 * this.cube, this.cube);
    rect(this.xCandy + 2 * this.cube, this.yCandy + 2 * this.cube, 2 * this.cube, 2 * this.cube);
    rect(this.xCandy + this.cube, this.yCandy + 2 * this.cube, this.cube, this.cube);
    rect(this.xCandy + 2 * this.cube, this.yCandy + 2 * this.cube, 2 * this.cube, 2 * this.cube);
    rect(this.xCandy + 3 * this.cube, this.yCandy + 4 * this.cube, this.cube, this.cube);
    rect(this.xCandy - this.cube, this.yCandy + 5 * this.cube, 4 * this.cube, this.cube);
    rect(this.xCandy - 2 * this.cube, this.yCandy + 6 * this.cube, 4 * this.cube, this.cube);
    rect(this.xCandy - 2 * this.cube, this.yCandy + 7 * this.cube, 3 * this.cube, this.cube);
    rect(this.xCandy - 2 * this.cube, this.yCandy + 8 * this.cube, 2 * this.cube, this.cube);
    rect(this.xCandy - this.cube, this.yCandy + 9 * this.cube, this.cube, this.cube);
    rect(this.xCandy + 8 * this.cube, this.yCandy + 2 * this.cube, this.cube, 3 * this.cube);
    rect(this.xCandy + 7 * this.cube, this.yCandy + this.cube, this.cube, 5 * this.cube);
    rect(this.xCandy + 6 * this.cube, this.yCandy + 3 * this.cube, this.cube, 3 * this.cube);
    rect(this.xCandy + 5 * this.cube, this.yCandy + 4 * this.cube, this.cube, 2 * this.cube);
    rect(this.xCandy + 4 * this.cube, this.yCandy + 5 * this.cube, this.cube, this.cube);
    rect(this.xCandy + 3 * this.cube, this.yCandy + 6 * this.cube, this.cube, this.cube);
    rect(this.xCandy + 3 * this.cube, this.yCandy + 7 * this.cube, 2 * this.cube, 2 * this.cube);
    rect(this.xCandy + 5 * this.cube, this.yCandy + 7 * this.cube, this.cube, this.cube);
    rect(this.xCandy + 6 * this.cube, this.yCandy + 8 * this.cube, this.cube, this.cube);
    rect(this.xCandy + 5 * this.cube, this.yCandy + 9 * this.cube, 3 * this.cube, this.cube);
    rect(this.xCandy + 4 * this.cube, this.yCandy + 10 * this.cube, 3 * this.cube, this.cube);

    fill(255);
    rect(this.xCandy + this.cube, this.yCandy + this.cube, 3 * this.cube, this.cube);
    rect(this.xCandy, this.yCandy + 2 * this.cube, this.cube, this.cube);
    rect(this.xCandy - this.cube, this.yCandy + 3 * this.cube, this.cube, 2 * this.cube);
    rect(this.xCandy + 2 * this.cube, this.yCandy + 9 * this.cube, 3 * this.cube, this.cube);
    rect(this.xCandy + 5 * this.cube, this.yCandy + 8 * this.cube, this.cube, this.cube);
  }

  move() {
    if (this.xCandy < 0) {
      this.xCandy = width + 100 * this.xSpeed;
    }
    this.xSpeed += 0.0031
    this.xCandy -= this.xSpeed;
    score += 1;
  }

}


class protagonistDead{
  constructor(x, y, cu) {
    this.xRun = x;
    this.yPos = y;
    this.cube = cu;
    this.yLeft = this.yPos + this.cube * 14;
    this.yRight = this.yPos + this.cube * 14;
    this.r = 213;
    this.g = 69;
    this.b = 130;
    this.ySpeed = 2;
  }

   display() {

    noStroke();
     
     fill( 194, 244, 252) //vleugels 
     fill( 194, 244, 252) //vleugels 
     rect(this.xRun-11*this.cube, this.yPos, this.cube, this.cube*9);
     rect(this.xRun-10*this.cube, this.yPos, this.cube, this.cube*12);
     rect(this.xRun-9*this.cube, this.yPos+this.cube, this.cube*3, this.cube*12);
     rect(this.xRun-6*this.cube, this.yPos+3*this.cube, this.cube*10, this.cube*11);
     
     rect(this.xRun+4*this.cube, this.yPos+5*this.cube, this.cube, this.cube*9);
     rect(this.xRun+5*this.cube, this.yPos+4*this.cube, this.cube*4, this.cube*10);     
     rect(this.xRun+8*this.cube, this.yPos+2*this.cube, this.cube*5, this.cube*11);     
     rect(this.xRun+10*this.cube, this.yPos+this.cube, this.cube*4, this.cube*10);     
     rect(this.xRun+14*this.cube, this.yPos+1, this.cube, this.cube*8);     

          
    fill(55, 185, 232) //donkervleugels 
    rect(this.xRun+this.cube, this.yPos+7*this.cube, this.cube*2, this.cube*4);
    rect(this.xRun+3*this.cube, this.yPos+6*this.cube, this.cube, this.cube*2);
    rect(this.xRun, this.yPos+6*this.cube, this.cube, this.cube*2);
    rect(this.xRun+4*this.cube, this.yPos+5*this.cube, this.cube, this.cube);//rechts
    rect(this.xRun+5*this.cube, this.yPos+4*this.cube, this.cube, this.cube);
    rect(this.xRun+6*this.cube, this.yPos+3*this.cube, this.cube*2, this.cube);
    rect(this.xRun+8*this.cube, this.yPos+2*this.cube, this.cube*2, this.cube);
    rect(this.xRun+10*this.cube, this.yPos+1*this.cube, this.cube*2, this.cube);
    rect(this.xRun+12*this.cube, this.yPos, this.cube*3, this.cube);
    rect(this.xRun, this.yPos+5*this.cube, this.cube, this.cube); //Links
    rect(this.xRun-1*this.cube, this.yPos+5*this.cube, this.cube, this.cube);
    rect(this.xRun-1*this.cube, this.yPos+4*this.cube, this.cube, this.cube);
    rect(this.xRun-4*this.cube, this.yPos+3*this.cube, this.cube*2, this.cube);
    rect(this.xRun-6*this.cube, this.yPos+2*this.cube, this.cube*2, this.cube);
    rect(this.xRun-8*this.cube, this.yPos+1*this.cube, this.cube*2, this.cube);
    rect(this.xRun-11*this.cube, this.yPos, this.cube*3, this.cube);
     
     
    rect(this.xRun+14*this.cube, this.yPos+this.cube, this.cube, this.cube*5);
    rect(this.xRun-11*this.cube, this.yPos+this.cube, this.cube, this.cube*5);
    rect(this.xRun+15*this.cube, this.yPos+5*this.cube, this.cube, this.cube*3);
    rect(this.xRun-12*this.cube, this.yPos+5*this.cube, this.cube, this.cube*3);
    rect(this.xRun+14*this.cube, this.yPos+8*this.cube, this.cube, this.cube);
    rect(this.xRun-11*this.cube, this.yPos+8*this.cube, this.cube, this.cube);
    rect(this.xRun+12*this.cube, this.yPos+9*this.cube, this.cube*2, this.cube);
    rect(this.xRun-10*this.cube, this.yPos+9*this.cube, this.cube*2, this.cube);
    rect(this.xRun+14*this.cube, this.yPos+10*this.cube, this.cube, this.cube);
    rect(this.xRun-11*this.cube, this.yPos+10*this.cube, this.cube, this.cube);
    rect(this.xRun+13*this.cube, this.yPos+11*this.cube, this.cube, this.cube);
    rect(this.xRun-10*this.cube, this.yPos+11*this.cube, this.cube, this.cube);
    rect(this.xRun+10*this.cube, this.yPos+12*this.cube, this.cube*3, this.cube);
    rect(this.xRun-9*this.cube, this.yPos+12*this.cube, this.cube*3, this.cube);
    rect(this.xRun+9*this.cube, this.yPos+13*this.cube, this.cube, this.cube);
    rect(this.xRun-6*this.cube, this.yPos+13*this.cube, this.cube, this.cube);
    rect(this.xRun+5*this.cube, this.yPos+14*this.cube, this.cube*4, this.cube);
    rect(this.xRun-5*this.cube, this.yPos+14*this.cube, this.cube*4, this.cube);
     
     rect(this.xRun+10*this.cube, this.yPos+5*this.cube, this.cube*3, this.cube);
     rect(this.xRun-9*this.cube, this.yPos+5*this.cube, this.cube*3, this.cube);
     rect(this.xRun+13*this.cube, this.yPos+4*this.cube, this.cube, this.cube);
     rect(this.xRun-10*this.cube, this.yPos+4*this.cube, this.cube, this.cube);
     rect(this.xRun+6*this.cube, this.yPos+11*this.cube, this.cube, this.cube);
     rect(this.xRun-3*this.cube, this.yPos+11*this.cube, this.cube, this.cube);
     rect(this.xRun+5*this.cube, this.yPos+9*this.cube, this.cube, this.cube*2);
     rect(this.xRun-2*this.cube, this.yPos+9*this.cube, this.cube, this.cube*2);
     rect(this.xRun+6*this.cube, this.yPos+8*this.cube, this.cube*3, this.cube);
     rect(this.xRun-5*this.cube, this.yPos+8*this.cube, this.cube*3, this.cube);
     rect(this.xRun+9*this.cube, this.yPos+9*this.cube, this.cube, this.cube);
     rect(this.xRun-6*this.cube, this.yPos+9*this.cube, this.cube, this.cube);
     rect(this.xRun+10*this.cube, this.yPos+10*this.cube, this.cube, this.cube*2);
     rect(this.xRun-7*this.cube, this.yPos+10*this.cube, this.cube, this.cube*2);

          
    fill(213, 171, 252); //huid
    rect(this.xRun + 2 * this.cube, this.yPos + 3 * this.cube, 2 * this.cube, 3 * this.cube);
    rect(this.xRun + this.cube, this.yPos + 4 * this.cube, 2 * this.cube, 3 * this.cube);
    rect(this.xRun + 5 * this.cube, this.yPos + 8 * this.cube, this.cube, this.cube);//hands
    rect(this.xRun - 2*this.cube, this.yPos + 8 * this.cube, this.cube, this.cube);//hands
    rect(this.xRun +0.2 * this.cube, this.yLeft, this.cube, 2 * this.cube); //feet
    rect(this.xRun + 2.8 * this.cube, this.yRight, this.cube, 2 * this.cube); //feet
  
          
 
    stroke(0); //zwart    
    line(this.xRun+2.5*this.cube, this.yPos+4*this.cube, this.xRun+3*this.cube, this.yPos+4.5*this.cube);
    line(this.xRun+2.5*this.cube, this.yPos+4.5*this.cube, this.xRun+3*this.cube, this.yPos+4*this.cube) 
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
     
     fill(252, 251, 229); //kleding
    rect(this.xRun, this.yPos + 7 * this.cube, 4 * this.cube, 2 * this.cube);
    rect(this.xRun - this.cube, this.yPos + 8 * this.cube, this.cube, this.cube);
    rect(this.xRun + 3 * this.cube, this.yPos + 8 * this.cube, 2 * this.cube, this.cube);
    rect(this.xRun + this.cube, this.yPos + 9 * this.cube, 2 * this.cube, 2 * this.cube);
    rect(this.xRun, this.yPos + 11 * this.cube, 4 * this.cube, this.cube);
    rect(this.xRun - this.cube, this.yPos + 12 * this.cube, 6 * this.cube, 2 * this.cube);
    rect(this.xRun - 4 * this.cube, this.yPos + 6 * this.cube, this.cube, this.cube);
    rect(this.xRun - 3 * this.cube, this.yPos + 7 * this.cube, this.cube, this.cube);
    rect(this.xRun - 4 * this.cube, this.yPos + 6 * this.cube, this.cube, this.cube);
    rect(this.xRun - 3 * this.cube, this.yPos + 7 * this.cube, this.cube, this.cube);
         
    fill(252, 251, 229); //haardecoratie
    rect(this.xRun, this.yPos, 2 * this.cube, 2 * this.cube);
    rect(this.xRun - 2 * this.cube, this.yPos + 2 * this.cube, 2 * this.cube, 2 * this.cube); 

  	fill(196, 195, 162); //schaduw kleding
    rect(this.xRun - this.cube, this.yPos + 8 * this.cube, this.cube, this.cube);
    rect(this.xRun, this.yPos + 7 * this.cube, this.cube, this.cube);
    rect(this.xRun + this.cube, this.yPos + 9 * this.cube, this.cube, 2 * this.cube);
    rect(this.xRun, this.yPos + 11 * this.cube, this.cube, this.cube);
    rect(this.xRun - this.cube, this.yPos + 12 * this.cube, this.cube, 2 * this.cube);
    rect(this.xRun, this.yPos + this.cube, this.cube, this.cube);
    rect(this.xRun - this.cube, this.yPos + 2 * this.cube, this.cube, this.cube);
     


  }
  
  move(){
  if(!gameOver){
  this.ySpeed += 0.01
  }
  
  this.yPos -= this.ySpeed
  this.yLeft -= this.ySpeed;
  this.yRight -= this.ySpeed;
   
  }
}
