
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5;
var roof1, roof2, roof3, roof4, roof5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	bob1 = new Bob(200, 500, 80, 80);
	bob2 = new Bob(330, 500, 80, 80);
	bob3 = new Bob(460, 500, 80, 80);
	bob4 = new Bob(590, 500, 80, 80);
	bob5 = new Bob(720, 500, 80, 80);

	roof1 = new Roof(200, 100, 89, 50);
	roof2 = new Roof(280, 100, 89, 50);
	roof3 = new Roof(360, 100, 89, 50);
	roof4 = new Roof(440, 100, 89, 50);
	roof5 = new Roof(520, 100, 89, 50);
	Engine.run(engine);
  
	var options1 = {
		bodyA : bob1.body,
		bodyB : roof1.body,
		stiffnes : 0.04,
		length : 300
	}
	var options2 = {
		bodyA : bob2.body,
		bodyB : roof2.body,
		stiffnes : 0.04,
		length : 300
	}
	var options3 = {
		bodyA : bob3.body,
		bodyB : roof3.body,
		stiffnes : 0.04,
		length : 300
	}
	var options4 = {
		bodyA : bob4.body,
		bodyB : roof4.body,
		stiffnes : 0.04,
		length : 300
	}
	var options5 = {
		bodyA : bob5.body,
		bodyB : roof5.body,
		stiffnes : 0.04,
		length : 300
	}
	var chain1 = Constraint.create(options1);
	World.add(world, chain1);
	var chain2 = Constraint.create(options2);
	World.add(world, chain2);
	var chain3 = Constraint.create(options3);
	World.add(world, chain3);
	var chain4 = Constraint.create(options4);
	World.add(world, chain4);
	var chain5 = Constraint.create(options5);
	World.add(world, chain5);
	
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  if (keyDown(UP_ARROW)){
	Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-200, y:300})
}

  drawSprites();
  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	//rope1.display();
	stroke(0);
	line(bob1.body.position.x+30, bob1.body.position.y, roof1.body.position.x, roof1.body.position.y);
	line(bob2.body.position.x+30, bob2.body.position.y, roof2.body.position.x, roof2.body.position.y);
	line(bob3.body.position.x+30, bob3.body.position.y, roof3.body.position.x, roof3.body.position.y);
	line(bob4.body.position.x+30, bob4.body.position.y, roof4.body.position.x, roof4.body.position.y);
	line(bob5.body.position.x+30, bob5.body.position.y, roof5.body.position.x, roof5.body.position.y);
}


