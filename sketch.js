// global variables
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19,
wall20, wall21, wall22, wall23, wall24, wall25;
var player;
function preload(){
  backImg = loadImage("images/Standard Dungeon.jpeg");
}

function setup(){
createCanvas(1600, 1600);

//creating player sprite
player = createSprite(100, 100, 50, 50);
player.shapeColor = "blue";

//creating the walls
wall1 = new Wall(700, 800, 800, 50);
wall2 = new Wall(100, 800, 200, 50);
wall3 = new Wall(1400, 800, 400, 50);

wall4 = new Wall(700, 950, 750, 50);
wall5 = new Wall(150, 950, 280, 50);
wall6 = new Wall(1350, 950, 412, 50);

wall7 = new Wall(735, 1100, 770, 50);
wall8 = new Wall(177, 1100, 800, 50);
wall9 = new Wall(1400, 1100, 320, 50);

wall10 = new Wall(390, 1250, 1250, 50);
wall11 = new Wall(1400, 1250, 400, 50);

wall12 = new Wall(1200, 1350, 50, 150);
wall13 = new Wall(1200, 1450, 50, 100);

wall14 = new Wall(700, 1400, 900, 50);
wall15 = new Wall(200, 1400, 200, 50);

wall16 = new Wall(700, 1550, 500, 50);
wall17 = new Wall(200, 1550, 500, 50);

wall18 = new Wall(900, 650, 1300, 50);
wall19 = new Wall(150, 650, 500, 50);

wall20 = new Wall(300, 500, 300, 50);
wall21 = new Wall(850, 500, 1000, 50);

wall22 = new Wall(370, 350, 1000, 50);
wall23 = new Wall(1250, 350, 900, 50);

wall24 = new Wall(300, 200, 50, 330);

wall25 = new Wall(800, 200, 1000, 50);


}

function draw(){
background(backImg);

edges = createEdgeSprites();

  //Player behaviours
  
  player.collide(edges[0]);
  player.collide(edges[1]);
  player.collide(edges[2]);
  player.collide(edges[3]);
  
  //player.collide(wall24);
  
if(keyDown("w")){
  player.velocityY = -3; 
}

if(keyDown("s")){
  player.velocityY = 3;
} 

if(keyDown("a")){
  player.velocityX = -3;
}

if(keyDown("d")){
  player.velocityX = 3;
}



//displaying everything
wall1.display();
wall2.display();
wall3.display();

wall4.display();
wall5.display();
wall6.display();

wall7.display();
wall8.display();
wall9.display();

wall10.display();
wall11.display();

wall12.display();
wall13.display();

wall14.display();
wall15.display();

wall16.display();
wall17.display();

wall18.display();
wall19.display();

wall20.display();
wall21.display();

wall22.display();
wall23.display();

wall24.display();

wall25.display();



drawSprites();


}