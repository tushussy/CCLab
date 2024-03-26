let dancer;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  // canvas.parent("p5-canvas-container");
  dancer = new Steve(width / 2, height / 2);
}

function draw() {
  background(0);

  dancer.update();
  dancer.display();
}
class Steve {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.arm = 0;
    this.head = 0;
    this.leg = 0;
  }
  update() {
    this.x += 1.5 * sin(frameCount * 0.1);
    this.y += 3 * cos(frameCount * 0.02);
    this.arm += -sin(frameCount * 0.1);
    this.head += cos(frameCount * 0.1);
    this.leg += sin(frameCount * 0.4);
  }
  display() {
    push();
    translate(this.x, this.y);

    //arms
    fill("#AC7C68");
    push();
    translate(-60, -45);
    rotate(sin(frameCount * 0.1) * 0.2);
    rect(0, 30, 25, 35);
    pop();

    //tshirt
    fill("#AC7C68");
    arc(0, -45, 40, 20, 0, PI);
    fill(1, 175, 176);
    rect(-35, -45, 70, 70);

    push();
    translate(35, -50);
    rotate(sin(frameCount * 0.1) * 0.2);
    rect(0, 5, 25, 40);
    pop();

    push();
    translate(-60, -45);
    rotate(sin(frameCount * 0.1) * 0.2);
    rect(-0, -0, 25, 40);
    pop();

    //arms2
    push();
    fill("#AC7C68");
    translate(35, -50);
    rotate(sin(frameCount * 0.1) * 0.2);
    rect(0, 40, 25, 35);
    pop();

    //legs
    fill("#463BA3");
    push();
    translate(0, 25);
    rotate(-sin(frameCount * 0.1) * 0.2);
    rect(0 + this.leg, 0, 35, 70);
    fill("grey");
    rect(0 + this.leg, 55, 35, 15);
    pop();

    push();
    translate(0, 25);
    rotate(sin(frameCount * 0.1) * 0.2);
    rect(-35 + this.leg, 0, 35, 70);
    fill("grey");
    rect(-35 + this.leg, 55, 35, 15);
    pop();

    //head
    fill("#AC7C68");

    rect(-25 + this.head, -95, 50, 50);
    fill("#291C0B");
    rect(-25 + this.head, -95, 50, 10);

    //face
    fill("white");
    rect(-20 + this.head, -80, 15, 10);
    rect(5 + this.head, -80, 15, 10);

    fill("#2224AD");
    rect(-13 + this.head, -78, 6, 6);
    rect(7 + this.head, -78, 6, 6);

    fill("white");
    arc(0 + this.head, -60, 30, 10, 0, PI);
    pop();
  }
}
