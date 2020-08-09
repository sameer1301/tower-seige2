const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);

    box1 = new Box(740,300,70,70);
    box2 = new Box(860,300,70,70);
    box7 = new Box(740,300,70,70);
    box10 = new Box(740,300,70,70);
    box11= new Box(800,300,70,70);
    box12= new Box(860,300,70,70);
    box13= new Box(740,300,70,70);
    
    

    box8 = new Box(860,300,70,70);
    //box9 = new Box(740,300,70,70);

    
    box6 = new Box(800,350,70,70);
    pig1 = new Pig(800,300,100,100);
    log1 = new Log(780,100,20,20);

    box3 = new Box(100,100,70,70);
    box4 = new Box(850,100,70,70);
    pig3 = new Pig(740,300,70,70);

    log3 =  new Log(300, PI/2);

    log4 = new Log(200,200,150, PI/7);
    log5 = new Log(150,150,20, -PI/7);

    bird = new Bird(100,100);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:300});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

   // box5.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
   // box14.display();


    box7.display();
    box8.display();
    box6.display();
    log4.display();
    log5.display();

    bird.display();
    //platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}