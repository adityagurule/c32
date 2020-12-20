const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,bg;
var bgimg;

function preload(){

    getTime();

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2= new Box(920,320,70,70);
    box3= new Box(700, 240,70, 70);
    box4= new Box(920, 240,70,70);
    box5= new Box(810,160,70,70); 

    pig1= new Pig(810,350);
    pig2= new Pig(810, 220);

    log1= new Log(810,260,300,PI/2);
    log2= new Log(810,180, 300, PI/2 );
    log3= new Log(760,120,150,PI/7);
    log4= new Log(870,120,150,-PI/7);

    platform= new Ground (150,305,300,150);

    // clog5= new Log(1,1,120,150);

    bird1= new Bird(100,100);

    sling= new Slingshot(bird1.body,{x:250, y:60});

    ground= new Ground(600,390,width, 20);
    // console.log(box2);
}

function draw(){
    if(bgimg){
    background(bgimg);
    }
    textSize(35);
    fill(255);
    text("SCORE : ",width-200,50);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    // clog5.display();
    bird1.display();
    sling.display();
   ground.display();
   platform.display();
  
      }


      function mouseDragged(){

        Matter.Body.setPosition(bird1.body,{x: mouseX, y: mouseY});


        }


        function mouseReleased(){

            sling.fly();


        }

        function keyPressed(){
            if(keyCode===32){
                sling.attach(bird1.body);
            }
        }


       async function getTime(){
              var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
              
              var responseJ  = await response.json();
              var dt   = responseJ.datetime;
              

             hr =  dt.slice(11,13);
           
                if(hr>=06&&hr<=14){
                    bg="images/bg.png"
                }             
                else {bg="images/bg2.jpg"}

                bgimg=loadImage(bg);

                        }