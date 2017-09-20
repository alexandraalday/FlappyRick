console.log('i am the canvas');

let rick;
let pipes = [];


function setup() {
	createCanvas(400, 600);
	rick = new Rick();
	pipes.push(new Pipe()); // keep creating new pipes for rick to avoid
}

function draw() {
	background(0);
	rick.update(); // falling action
	rick.show(); // hello rick!

	for (let i = 0; i < pipes.length; i++){
		pipes[i].show();
		pipes[i].update();
	}
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