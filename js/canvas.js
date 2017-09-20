console.log('i am the canvas');

let rick;
let pipes = [];


function setup() {
	createCanvas(800, 600);
	rick = new Rick();
	pipes.push(new Pipe()); // create initial pipe
}

function draw() {
	background(0);
	rick.update(); // falling action
	rick.show(); // hello rick!

	// infinite pipes
	if (frameCount % 100 == 0){ // every x frames add a new set of pipes
		pipes.push(new Pipe());
	}
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