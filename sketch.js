var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=160; k = k + 160) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=240; k = k + 240) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=80*4; k = k + 80*4) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=80*5; k = k + 80*5) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=80*6; k = k + 80*6) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=80*7; k = k + 80*7) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=80*8; k = k + 80*8) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=80*9; k = k + 80*9) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=80*10; k = k + 80*10) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,475));
  }

  //create particle objects

    
}
 


function draw() {
  background(237,28,198);
  textSize(20)

  
  fill("red")
  text("10",25,750);

  
 fill("blue")
  text("20",110,750)
  fill("green")
  text("30",190,750)
  fill("yellow")
  text("40",270,750)
  fill("lightBlue")
  text("50",350,750)

  
  fill("red")
  text("10",430,750);

  
 fill("blue")
  text("20",510,750)
  fill("green")
  text("30",590,750)
  fill("yellow")
  text("40",670,750)
  fill("lightBlue")
  text("50",750,750)
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  particleSpawner();
  drawSprites();
}
function particleSpawner() {
  if(frameCount%60===0) {
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
   particles.display();
}
}