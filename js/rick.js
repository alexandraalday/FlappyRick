console.log('i am rick')

function Rick() {
	this.y = width/2;
	this.x = 25;

	this.show = function() {
		fill(0, 255, 0);
		ellipse(this.x, this.y, 16, 16);
	}
}