const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, block, box;
var polygon;
function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(400,350,200,20);
   ground2 = new Ground(800,200,200,20);

    block1 = new Block(330,235,30,40);
    block2 = new Block(360,235,30,40);
    block3 = new Block(390,235,30,40);
    block4 = new Block(420,235,30,40);
    block5 = new Block(450,235,30,40);
    block6 = new Block(360,195,30,40);
    block7 = new Block(390,195,30,40);
    block8 = new Block(420,195,30,40);
    block9 = new Block(390,155,30,40);

    block10 = new Block(730,135,30,40);
    block11 = new Block(760,135,30,40);
    block12 = new Block(790,135,30,40);
    block13 = new Block(820,135,30,40);
    block14 = new Block(850,135,30,40);
    block15 = new Block(760,95,30,40);
    block16 = new Block(790,95,30,40);
    block17 = new Block(820,95,30,40);
    block18 = new Block(790,55,30,40);

    polygon = new Polygon(50,20,10)

   slingshot = new SlingShot(polygon.body,{x:100,y:200});

}
    function draw(){
        background("white");
        Engine.update(engine);
        
        ground1.display();
        ground2.display();

        block1.display();
        block2.display();
        block3.display();
        block4.display();
        block5.display();                   
        block6.display();
        block7.display();
        block8.display();
        block9.display();

        block10.display();
        block11.display();
        block12.display();
        block13.display();
        block14.display();                   
        block15.display();
        block16.display();
        block17.display();
        block18.display();

        slingshot.display();
        polygon.display();

        

    }


    function mouseDragged(){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
    

    function mouseReleased(){
        slingshot.fly();
    }


