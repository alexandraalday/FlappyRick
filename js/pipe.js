console.log('i am a pipe')

function Pipe() {
	this.top = random(height/2);
	this.bottom = random (height/2);
	this.x = width; // always start at edge of canvas
	this.width = 20;
	this.speed = 2;

	// watch out for those pipes!
	this.show = function() {
		fill(0, 255, 0);
		rect(this.x, 0, this.width, this.top); //top pipe
		rect(this.x, (height - this.bottom), this.width, this.bottom); // bottom pipe
	}

	this.update = function() {
		this.x -= this.speed;
	}
}