console.log('i am a pipe')

function Pipe() {
	let spacing = random(50, height / 3); //get random amount of space between the pipes
	let center = random(spacing, height - spacing); // then have that random spacing centered on the y axis randomly
	this.top = center - spacing / 2;
	this.bottom = height - (center + spacing / 2);
	this.x = width; // always start at edge of canvas
	this.width = 40;
	this.speed = 2;
	this.hit = false;

	// watch out for those pipes!
	this.show = function() {
		fill(0, 255, 0);
			if (this.hit){
				fill(255, 0, 0);
			}
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
				this.hit = true; 
				return true;
			}
		}
		this.hit = false;
		return false;
	}
}