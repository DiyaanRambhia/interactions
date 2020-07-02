function Planet()
	{
		this.x = random(0 , width);
		this.y = random(0 , height);
		this.d = random(5 , 40);

	this.show = function()
	{
		stroke(255 , 151);
		strokeWeight(4);
		noFill();
		ellipse(this.x , this.y , this.d);
	}
		this.move = function()
		{
			this.x = this.x + random(1 , -1);
			this.y = this.y + random(1 , -1);
		}

		this.intersects = function(other)
	{
		var d = dist(this.x, this.y, other.x, other.y);
    	if (d < this.r + other.r) 
    	{
      		return true;
   		} 
   		else 
    	{
     	 	return false;
    	}
	}
		
}