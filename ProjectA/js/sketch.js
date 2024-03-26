let s = [];
let x = [];
let y = [];
let speedS = [];
let rand, rando;
let yoff = 0;
let spacePressed = false;

let els1 = 150;
let els2 = 350;

let moonb = 50;
let moonc = 80;

let meteorCount = 5;
let meteorX = [];
let meteorY = [];
let meteorSpeed = [];
let meteorLen = [];



function setup() {
  createCanvas(800, 500);
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container")
  noStroke();
  background('black');

  for (let i = 0; i < meteorCount; i++) {
    meteorX[i] = random(width);
    meteorY[i] = random(-500, -50);
    meteorSpeed[i] = random(1, 5);
    meteorLen[i] = random(10, 30);
  }

  drawMoon();
  skyline();
    drawStars();

}

function draw() {
  if (spacePressed) {
    els();
  } else {
    els(); 
    anema();
    drawMeteor();
  
    } 
textAlign(CENTER, TOP);
  fill('red');
  textSize(20);
  text("The Harkonnens arrived! Help Arrakis", width / 2, 0);
  
  textAlign(LEFT, BOTTOM);
  fill(255);
  textSize(20);
  text("1. Press mouse for Harkonnens  disturbance\n2. Press Space to Save Arrakis\n3. Press 1 for Earthquake", 10, height);

}

function keyPressed() {
  if (keyCode === 32) {
    spacePressed = !spacePressed;
  }
}

function els() {
  stroke('black')
  fill('orange');
  beginShape();
  let xoff = 0;
  for (let x = 0; x <= width; x += 10) {
    let y = map(noise(xoff, yoff), 0, 1, els1, els2);
    vertex(x, y);
    xoff += 0.1;
  }
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  
  if (keyCode == 32){
    yoff = 0
    xoff = 0
  if (keyCode == 49){
    yoff += 0.01;
      xoff += 0.1;
  }
  }
}

function drawMoon() {
  fill(255);
  let moona = random(100, 700);
  ellipse(moona, moonb, moonc, moonc);
  fill(180);
  ellipse(moona + 30, moonb + 30, moonc / 2, moonc / 2);
}

function drawStars() {
  fill('white');
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(200);
    ellipse(x, y, 4, 4);
  }
}

function drawMeteor() {
  for (let i = 0; i < meteorCount; i++) {
    meteorY[i] += meteorSpeed[i];
    if (meteorY[i] > height + meteorLen[i]) {
      meteorY[i] = random(-500, -50);
      meteorX[i] = random(width);
    }
    push();
    noStroke();
    fill(random(255), random(255), random(255));
    circle(meteorX[i], meteorY[i] + meteorLen[i], 5);
    pop();
  }
}
function skyline() {
  fill("navy");
  for (let x = 0; x <= width; x += 20) {
    let y = random(170, 200);
    ellipse(x, y, 200, 150);
  }
}

function anema() {
  fill(random(255), random(255), random(255));
  for (let i = 0; i < x.length; i++) {
    if (y[i] === 0) {
      y[i] = random(350, 500); 
    }
    DrawStar(x[i], y[i], s[i], 5, 10); // Draw a star
    s[i] = sin(frameCount * speedS[i]);
    s[i] = map(s[i], -1, 1, 0, 100);
  }
}

function DrawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function mousePressed() {
  let rand = random(width);
  let rando = random(250, 500);
  s.push(100);
  x.push(rand);
  y.push(rando);
  speedS.push(random(0.05, 0.1));
  }