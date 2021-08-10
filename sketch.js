var spaceBG;
var iss, issImg;
var spacecraft, spacecraft1, spacecraft2, spacecraft3, spacecraft4;
var hasDocked = false;

function preload() {
  spaceBG = loadImage("images/spacebg.jpg");
  issImg = loadImage("images/iss.png");
  spacecraft1 = loadAnimation("images/spacecraft1.png");
  spacecraft2 = loadAnimation("images/spacecraft2.png");
  spacecraft3 = loadAnimation("images/spacecraft3.png");
  spacecraft4 = loadAnimation("images/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg);
  iss.scale = 0.9;

  spacecraft = createSprite(300, 330, 50, 50);
  spacecraft.addAnimation("static", spacecraft1);
  spacecraft.scale = 0.2;
}

function draw() {
  background(spaceBG);  

  if(!hasDocked){
    spacecraft.x = Math.round(random(400, 403));

    if(keyDown("left")){
      spacecraft.addAnimation("left", spacecraft3);
      spacecraft.changeAnimation("left");
    }
    if(keyDown("right")){
      spacecraft.addAnimation("right", spacecraft4);
      spacecraft.changeAnimation("right");
    }
    if(keyDown("up")){
      spacecraft.x = spacecraft.x-50;
      spacecraft.y = spacecraft.y-3;
    }
    if(keyDown("down")){
      spacecraft.addAnimation("both", spacecraft2);
      spacecraft.changeAnimation("both");
    }
  }
    if((spacecraft.x >= 350 || spacecraft.x <= 353) && spacecraft.y === 267){
      hasDocked = true;
      stroke("white");
      fill("white");
      textSize(20);
      text("Docking successful!", 350, 320);
    
    }

  drawSprites();
}