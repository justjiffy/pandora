let g = 137;
//a variable named 'colors', that is an [Array]
let colors = ['#9bcf86','#48e2f7', '#cc936e', "red"];

function setup(){
  createCanvas(1000, 1000);
  let button = createButton('change background');
   button.position(0, 100);
   button.mousePressed(repaint);
   let button2 = createButton('change body colour');
   button2.position(150, 100);
   button2.mousePressed(repaint);
}

function draw() {
background(g);
body();
arms();
face();
hacc();
}

function body() {
 noStroke();
 fill(colors[0]);
 ellipse(400,400,300,340)
}

function arms() {
 //rshoulder
  ellipse(550,400,110,80);
 //handr
  ellipse(600,350,60,130);
 // lshoulder
  ellipse(250,460,110,80);
 //lhand
  ellipse(200,410,60,130);
}

function face() {
  //left eye
  fill('black');
  ellipse(350,360,28,37);
  //reye
  ellipse(450,360,28,37);
  //mouf
  stroke('red');
  noFill();
  arc(400, 400, 40, 40, 0, PI );
  //lchekk
  noStroke();
  fill('#FFD4CA');
  ellipse(320,405,50,30);
  ellipse(490,405,50,30);
}

function hacc(){
  textSize(48);
  text('🌸',300,300);
}

function repaint (){
  g = random(255);
}
