console.log('i am a pipe')

function Pipe() {
	this.top = random(height/2);
	this.bottom = random (height/2);
	this.x = width; // always start at edge of canvas
	this.width = 40;
	this.speed = 2;

	// watch out for those pipes!
	this.show = function() {
		fill(0, 255, 0);
		rect(this.x, 0, this.width, this.top); //top pipe
		rect(this.x, (height - this.bottom), this.width, this.bottom); // bottom pipe
	}

	// move
	this.update = function() { 
		this.x -= this.speed;
	}

	// girl bye
	this.disappear = function() { 
		return this.x < -this.width;
	}

	// POW! right in the kisser. 
	this.hits = function(rick) {
		if (rick.y < this.top || rick.y > height - this.bottom){ // check if rick hits pipe on y axis
			if (rick.x > this.x && rick.x < (this.x + this.width)){ // then check if rick hits pipe on x axis
				return true;
			}
		}
		return false;
	}
}