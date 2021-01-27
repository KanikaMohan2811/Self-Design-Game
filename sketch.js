var backgroundImage,myBackground;
var characterImage,myCharacter;


function preload(){
backgroundImage=loadImage("images/background.jpg")
characterImage=loadAnimation("images/running.gif")
}

function setup(){
createCanvas(900,700);    
myBackground=createSprite(450,350,900,700);
myBackground.addImage(backgroundImage);
myBackground.velocityX = -2;
myBackground.sacle = 2;
myCharacter=createSprite(200,440);
myCharacter.addAnimation("running",characterImage);
}

function draw(){
    background("white");
    if(myBackground.x<400){
        myBackground.x = myBackground.width/2; 
    }
    drawSprites();
}