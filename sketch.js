var speed=0

function preload()
{
	astro1img=loadImage('images/astro2 (1).png')
}

function setup() {
	createCanvas(800, 700);
	astrounot=new Astrounot()
	g1=new Platform()
	
	



}


function draw() {
 
  background(0);
  
  drawSprites();
 
}




