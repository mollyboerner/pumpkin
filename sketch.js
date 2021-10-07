var x0 = 200;
var y0 = 200;
var h;
var w;
var r;
var g;
var b;
var r0;
var x1;
var x2;
var y1;
var y2;


class pumpkin{
  constructor(w,h,r,g,b,r2,g2,dX1,dX2,dY){
    this.h = h;
    this.w = w;
    this.r = r;
    this.g = g;
    this.b = b;
    this.r2 = r2;
    this.g2 = g2;
    this.dX1 = dX1;
    this.dX2 = dX2;
    this.dY =dY;
    this.yPeak = 210-h/2;
  }
  draw(){
    fill(this.r,this.g,this.b);
    stroke(this.r+30,this.g+30,0);
    strokeWeight(4)
    ellipse(200+this.w/3.5,200,this.w/2,8*this.h/10); /*right*/
    ellipse(200-this.w/3.5,200,this.w/2,8*this.h/10); /*left*/
    ellipse(200+this.w/6,200,this.w/2,9*this.h/10); /*center-right*/
    ellipse(200-this.w/6,200,this.w/2,9*this.h/10); /*center-left*/
    fill(this.r2,this.g2,this.b);
    quad(190,this.yPeak,210,this.yPeak,200+this.dX1,this.yPeak-this.dY,200-this.dX2,this.yPeak-this.dY)
    fill(this.r,this.g,this.b);
    ellipse(200,200,this.w/2,9.5*this.h/10); /*center*/
  }
}

let pumpkin1;


function setup() {
  createCanvas(400, 400);
  pumpkin1 = new pumpkin(300,300,210,100,0,0,0,15,20,30); /*w(150-300),h(150-300)*/
}

function draw() {
  background(100,120,0);
  pumpkin1.draw()
}

function mousePressed() {
  pumpkin1.w = random(150,300);
  pumpkin1.h = random(150,300);
  pumpkin1.r = random(210,255); 
  pumpkin1.g = random(100,200);
  pumpkin1.b = random(0,80);
  pumpkin1.r2 = random(20,100);
  pumpkin1.g2 = random(100,180);
  pumpkin1.dX1 = random(10,20);
  pumpkin1.dX2 = random(10,20);
  pumpkin1.dY = random(20,50);
  pumpkin1.yPeak = 210-pumpkin1.h/2; 
}