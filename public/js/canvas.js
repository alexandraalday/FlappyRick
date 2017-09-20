console.log('i am the canvas');

let rick;
let pipes = [];
let button;
let pause = true;
let mic;
let slider;


function setup() {
	createCanvas(800, 600);
	button = createButton("Play");
	button.mousePressed(startGame);
	mic = new p5.AudioIn();
	mic.start();
	rick = new Rick();
	pipes.push(new Pipe()); // create initial pipe
	slider = createSlider(0, 1, 0.2, 0.01); // setup a slider for volume controls
}

function startGame() {
	pause = false;
}

function draw() {
	background(0);
	let volume = mic.getLevel();

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

	if (volume > 0.2){
		rick.up();
	}

	//show sound level
	fill(0, 255, 0);
	let y = map(volume, 0, 1, height, 0); 
	rect(width-50, y, 50, height - y);
}

function keyPressed() {
	if (key == ' ' && !pause){
		rick.up();
	}
	if (keyCode == 38 && !pause){
		rick.up(); 
	}
	if (key == "p" || key == "P") {
        pause = !pause;
        if (pause) {
 			// console.log('Skkrt skkrt')
        }
	}
}