console.log('i am the canvas');

let rick;
let pipes = [];
let button;
let pause = true;


function setup() {
	createCanvas(800, 600);
	button = createButton("Play");
	button.mousePressed(startGame);
	rick = new Rick();
	pipes.push(new Pipe()); // create initial pipe
}

function startGame() {
	pause = false;
}

function draw() {
	background(0);
	if (!pause){
		rick.update(); // falling action
		rick.show(); // hello rick!

		// infinite pipes
		if (frameCount % 150 == 0){ // every x frames add a new set of pipes
			pipes.push(new Pipe());
		}
		for (let i = pipes.length-1; i >= 0; i--){
			pipes[i].show();
			pipes[i].update();

			if (pipes[i].hits(rick)) { // check for hits
				console.log("OUCH!")
			}

			if (pipes[i].disappear()){ // when the pipe disappears, remove it
				pipes.splice(i, 1);
			}
		}
	}	
}

function keyPressed() {
	if (key == ' ' && !pause){
		console.log("SPACE")
		rick.up();
	}
	if (keyCode == 38 && !pause){
		console.log("UP")
		rick.up(); 
	}
	if (key == "p" || key == "P") {
        pause = !pause;
        if (pause) {
 			console.log('Skkrt skkrt')
        }
	}
}