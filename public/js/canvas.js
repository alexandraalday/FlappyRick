let rick;
let pipes = [];
let button;
let start;
let pause = true;
let mic;
let voice;
let slider;
let noise = false;



function setup() {
	createCanvas(800, 600);
	start = createButton("Play");
	start.mousePressed(startGame);
	mic = new p5.AudioIn();
	voice = createButton("Move with Sound")
	voice.mousePressed(voiceMode);
	rick = new Rick();
	pipes.push(new Pipe()); // create initial pipe
	slider = createSlider(0, 0.5, 0.1, 0.01); // setup a slider for volume controls
}

function startGame() {
	pause = false;
}

function voiceMode() {
	mic.start();
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

	//show sound level and threshold
	let thresholdTop = slider.value();
	let thresholdBottom = 0.1
	if (volume > thresholdTop && !noise){
		noise = true;
		rick.up();
	}
	if (volume < thresholdBottom) {
		noise = false;
	}

	fill(0, 255, 0);
	let y = map(volume, 0, 1, height, 0); 
	rect(width-50, y, 50, height - y);
	let threshy = map(thresholdTop, 0, 1, height, 0);
	stroke(255, 0, 0);
	strokeWeight(4);
	line(width-50, threshy, width, threshy);
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