console.log('i am the canvas');

let rick;


function setup() {
	createCanvas(400, 600);
	rick = new Rick();
}

function draw() {
	background(0);
	rick.update(); // falling action
	rick.show(); // hello rick!
}

function keyPressed() {
	if (key == ' '){
		console.log("SPACE")
		rick.up();
	}
	if (keyCode == 38){
		console.log("UP")
		rick.up(); 
	}
}