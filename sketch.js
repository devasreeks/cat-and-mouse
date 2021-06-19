var tom,tomImg,tomImg1;
var jerry,jerryImg,jerryImg1;
var gardImg,gard;

function preload() {
    //load the images here
gardImg = loadImage("images/garden.png");
tomImg1 = loadAnimation("images/cat1.png");
tomImg2 = loadAnimation("images/cat2.png","images/cat3.png");
jerryImg1 = loadAnimation("images/mouse1.png");
jerryimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);

    gard = createSprite(200,300);
    gard.addImage(gardImg);

   tom = createSprite(200,400);
   tom.addAnimation("firsttom",tomImg1);
   tom.scale = 0.2;

   jerry = createSprite(100,400);
   jerry.addAnimation("jeryy1",jerryImg1);
jerry.scale  = 0.15;
}

function draw() {

    background(255);


    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
tom.addAnimation("catHappy",tomImg1);
tom.changeAnimation("catHappy",tomImg1);
tom.velocityX = 0;
tom.x = 300;
tom.scale = 0.2;

jerry.addAnimation("mouseHappy",jerryImg1);
jerry.changeAnimation("mouseHappy",jerryImg1);
jerry.scale = 0.15;
    }

    

    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        jerry.addAnimation("mouseteasing",jerryImg2);
        jerry.changeAnimation("mouseTeasing",jerryImg2)
        jerry.frameDelay = 25;
    
    
          jerry.addAnimation("catteasing",tomImg2);
          jerry.changeAnimation("catteasing",tomImg2);
          jerry.frameDelay = 25;
      }

}


