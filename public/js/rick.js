function Rick() {
	this.y = height/2;
	this.x = 150;
	this.gravity = 0.6; // force pushing rick down
	this.velocity = 0; // causing gravity force to increase
	this.forcePush = -15; // force pushing rick up

	// hello rick!
	this.show = function() {
		noStroke();
        switch (player) {
            case 0:
                lulz = p1;
                break;
            case 1:
                lulz = p2;
                break;
            case 2:
                lulz = p3;
                break;
            case 3:
                lulz = p4;
                break;
            case 4:
                lulz = p5;
        }
		image(lulz, this.x, this.y, 64, 64);
	}


	// see rick fly
	this.up = function() {
		this.velocity += this.forcePush;
	}

	// it's gravity, son
	this.update = function() { 
		this.velocity += this.gravity; // the amount of velocity will change by the amount of gravity
		this.velocity *= 0.9; // decrease velocity, otherwise rick doesn't fly too good
		this.y += this.velocity; // rick will fall on the y axis by the amount of velocity

		if (this.y > height) { // stop at bottom of canvas
			this.y = height;
			this.velocity = 0; //reset velocity
		}
		if (this.y < 0) { // stop at top of canvas
			this.y = 0;
			this.velocity = 0; //reset velocity
		}
	}
}