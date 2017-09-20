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
	for (let i = pipes.length-1; i >= 0; i--){
		pipes[i].show();
		pipes[i].update();

		if (pipes[i].disappear()){ // when the pipe disappears, remove it
			pipes.splice(i, 1);
		}
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