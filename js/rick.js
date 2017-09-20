console.log('i am rick')

function Rick() {
	this.y = height/2;
	this.x = 64;
	this.gravity = 1; // force pushing rick down
	this.velocity = 0; //causing gravity to increase

	this.show = function() {
		fill(0, 255, 0);
		ellipse(this.x, this.y, 32, 32);
	}

	this.update = function() { // rick should fall if you do nothing
		this.velocity += this.gravity; // the amount of velocity will change by the amount of gravity
		this.y += this.velocity; // rick will fall on the y axis by the amount of velocity
	}
}