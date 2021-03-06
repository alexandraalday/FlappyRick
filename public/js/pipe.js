function Pipe() {
	let spacing = random(75, height / 3); //get random amount of space between the pipes
	let center = random(spacing, height - spacing); // then have that random spacing centered on the y axis randomly
	this.top = center - spacing / 2;
	this.bottom = height - (center + spacing / 2);
	this.x = width; // always start at edge of canvas
	this.width = 60;
	this.speed = 2;
	this.hit = false;


	// watch out for those pipes!
	this.show = function() {
		noStroke();
		fill(0, 255, 0);
			if (this.hit){
				fill(255, 0, 0);
        	switch (smack) {
	            case 0:
	                smack = rockhit1;
	                break;
	            case 1:
	                smack = rockhit2;
	                break;
	            case 2:
	                smack = rockhit3;
	                break;
	            case 3:
	                smack = rockhit4;
	        }
			
			rick.lives--;
			console.log(smack);
			smack.play()
			smack.setVolume(0.7);


			}
			if (!this.hit) {
	            image(downrock, this.x - this.width, 0, 3 * this.width, this.top);
	            image(uprock, this.x - this.width, height - this.bottom, 3 * this.width, this.bottom);
			}
	}

	// move
	this.update = function() { 
		this.x -= this.speed;
	}

	// girl, bye
	this.disappear = function() { 
		return this.x < -this.width;
	}

	// POW! right in the kisser. 
	this.hits = function(rick) {
		if (rick.y < this.top || rick.y > height - this.bottom){ // check if rick hits pipe on y axis
			if (rick.x > this.x && rick.x < (this.x + this.width -58)){ // then check if rick hits pipe on x axis
				this.hit = true; 
				return true;
			}
		}
		this.hit = false;
		return false;
	}
}