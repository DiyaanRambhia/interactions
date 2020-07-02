function Wall(x , y)
	{
		this.x = x;
		this.y = y;
		this.d = 50;
		this.col = color(random(255) , random(255) , random(255));

		this.show = function()
	{
		stroke(255 , 151);
		strokeWeight(4);
		noFill();
		ellipse(this.x , this.y , this.d);
	}

	this.changeColor = function()
	{
		this.col = color(random(255) , random(255) , random(255));
	}
}
