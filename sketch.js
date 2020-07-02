var planets = [];
var walls;
var block;

function setup() 
{
	createCanvas(600 , 400);
	for (var i = 0; i < 100; i++) 
		{
			planets[i] = new Planet();
		}
	walls = new Wall(300 , 200);
	block = new Block(300 , 200);		
}


function draw() 
{
	background(0);
	walls.show();
	//block.show();

	for (var i = 0; i < planets.length; i++)
	{
		planets[i].show();
		planets[i].move();


	if(planets[i].x > walls.x + walls.width &&  planets[i].x <  walls.x + walls.width && planeplanets[i].y > walls.y + walls.heightts[i].y > walls.y + walls.height && planets[i].y > walls.y + walls.height)
		{
			walls.changeColor();
		}
	}

	

}