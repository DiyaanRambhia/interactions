function Block()
{
	this.x = 300;
	this.y = 200;
	this.d = 30;

	this.show = function()
	{
		stroke(255 , 255 , 0 , 151);
		strokeWeight(4);
		noFill();
		rect(this.x , this.y , this.d , this.d);
	}
}