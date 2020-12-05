var gamestate = 0;
var john,introscreen,beachsprite,beach_background,johnimage;
function preload()
{
introscreen = loadImage("images/introturtle.jpg");	
beachsprite = loadImage("images/beachbackground.jpg");
johnimage = loadImage("images/scubaboybeach.png");

}

function setup() {
	createCanvas(displayWidth,displayHeight);
	background(200);

  beach_background = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  beach_background.addImage(beachsprite)
  beach_background.scale = 1.2
  beach_background.visible = false; 
  john = createSprite(700,500,50,120);
  john.addImage(johnimage)
  john.scale = 0.35
  john.visible=false;
  
  


	//Create the Bodies Here.

  
}


let s = 'This game was created to bring awareness about ocean pollution. In this game, you will have to use arrow keys \n to move up,down,left, and right. To use your net and bring the turtles to safety. Catch the floating plastic\n by making it touch the net. If you can get all the plastic before time is up, the turtle is saved! However,\n if the turtle even touches a piece of plastic, the game is over.'

function draw() 
{
  rectMode(CENTER);
  background(rgb(13,219,216));
 
  
  if(gamestate===0)
  {


      background(introscreen);
      
      textSize(40);
      fill(50,200,50)
      text("Save The Turtles!", displayWidth/2.5, displayHeight/10 - 30);

      fill(200,50,50)
      textSize(30); 
      text(s,displayWidth/2-750, displayHeight/8);
      text("Press space to continue.",displayWidth/2-140, displayHeight/4 + 100); 

      if(keyDown("SPACE"))
        {
          gamestate=1;
        }

  }

 


  if(gamestate===1){
background(rgb(200,100,50))
beach_background.visible=true;
john.visible=true;



}
  
 
  
  

  drawSprites();
 
}

