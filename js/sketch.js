var jungle1,jungle1I;
var jungle2,jungle2I;
var bheem,bheemI;
var chutki,chutkiI;
var raju,rajuI;
var jagu,jaguI;
var bear,bearI;
var coin,coinI;
var crab,crabI;
var lion,lionI;
var playB,playBI;
var rg,rgI;
var tree,treeI;
var wood,woodI;



function preload() {
 jungle1I=loadImage("jungle4.png");
 jungle2I=loadImage("jungle5.png");
//  bheemI=loadAnimation("bheem1.png","bheem2.png","bheem3.png","bheem4.png");
//  chutkiI=loadAnimation("chutki1.png","chutki2.png","chutki3.png","chutki4.png");
//  rajuI=loadAnimation("raju1.png","raju2.png","raju3.png","raju4.png");
//  jaguI=loadAnimation("jagu1.png","jagu2.png","jagu3.png","jagu4.png");
bearI=loadImage("bear2.png");
coinI=loadImage("coin.png");
crabI=loadImage("crab.png");
lionI=loadImage("lion2.png");
playBI=loadImage("play4.jpg");
rgI=loadImage("restart.png");
treeI=loadImage("tree2.png");
woodI=loadImage("wood 3.png");

 

}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

 game = new Game();
 game.start();
  
  jungle1=createSprite(400,400);
  jungle1.addImage("jungle1I",jungle1I);
  jungle1.visible=false;
  jungle2=createSprite(200,200);
  jungle2.addImage("jungle2I",jungle2I);
  jungle2.visible=false;
  // bheem=createSprite(200,200);
  // bheem.addAnimation("bheemI",bheemI);
  // chutki=createSprite(400,400);
  // chutki.addAnimation("chutkiI",chutkiI);
  // raju=createSprite(600,600);
  // raju.addAnimation("rajuI",rajuI);
  // jagu=createSprite(800,800);
  // jagu.addAnimation("jaguI",jaguI);
  // bear=createSprite(100,100);
  // bear.addImage("bearI",bearI);
  //bear.visible=false;
  coin=createSprite(200,200);
  coin.addImage("coinI",coinI);
  coin.visible=false;
  // crab=createSprite(300,300);
  // crab.addImage("crabI",crabI);
  //crab.visible=false;
  // lion=createSprite(400,400);
  // lion.addImage("lionI",lionI);
  //lion.visible=false;
  // playB=createSprite(1100,600);
  //   playB.addImage("playBI",playBI);
    // playB.scale=2
    // playB.mousePressed(play);
  // rg=createSprite(600,600);
  // rg.addImage("rgI",rgI)
  //rg.visible=false;
  // tree=createSprite(700,700);
  // tree.addImage("treeI",treeI);
  //tree.visible=false;
  wood=createSprite(800,800);
  wood.addImage("woodI",woodI);
  wood.visible=false;

 

  

  
  

  
}

function draw() {
background(jungle2I)


  game.play();



   drawSprites();
}

  


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}




