var balloon,balloonImg,balloonImage,background,backgroundImg;
var database;
var height;

function preload(){
   backgroundImg=loadImage("Images/1.png");
   balloonImage=loadAnimation("Images/2.png","Images/3.png","Images/4.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  console.log(database)
  createCanvas(1500,700);

  balloon=createSprite(100,400,20,20);
  balloon.addAnimation("balloon",balloonImage);
  balloon.scale=0.4;

}

// function to display UI
function draw() {
  background(backgroundImg);

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x + 10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y - 10;
    balloon.scale = 0.5
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y + 10;
    balloon.scale = 0.4
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}


function updateHeight(x,y){
  database.ref('balloon/height').set({
    'x': height.x + x ,
    'y': height.y + y
  })
}

function readHeight(data){
  height = data.val();
  console.log(height.x);
  balloon.x = height.x;
  balloon.y = height.y;
}

function showError(){
  console.log("Error in writing to the database");
}