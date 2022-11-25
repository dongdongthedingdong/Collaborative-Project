let CANVAS_SIZE = 400;
let GRID_SQUARES = 10;
let STEP = CANVAS_SIZE/GRID_SQUARES;
let NUM_ROTATIONS = 10;


var COLORS = [[216, 164, 127],[239, 131, 84],[238, 75, 106],[223, 59, 87],[15, 113, 115], [13, 31, 45]]

function setupStandardAxes(showLines){
  push()
  translate(100,100)
  scale(1.0,-1.0)

}

function ez_fix(){
    for(var i = 0;i < NUM_ROTATIONS;i++){
  rotate(360/NUM_ROTATIONS);
  square(1/2*STEP, 1/2*STEP, 8)
    square(3/2*STEP, -1/2*STEP, 10)
    square(2*STEP, 1*STEP, 5)
    }
}

function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  background(220);
  angleMode(DEGREES);
  setupStandardAxes();
  fill(0,0,0)
  
  ez_fix();
  translate(200,0)
  ez_fix();
  translate(-200,-200)
  ez_fix();
  translate(200,0)
  ez_fix();
 
}
