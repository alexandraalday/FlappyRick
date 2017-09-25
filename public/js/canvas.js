// Based in part on Dan Shiffman's p5.js coding challenge #31 - Flappy Bird tutorial.

let canvas;
let rick;
let pipes = [];
let uprock;
let downrock;
let pause = false;
// let mic;
// let voice;
// let slider;
// let noise = false;
let player;
let difficulty;
let distance;


function preload() {
	bg = loadImage('assets/bg.png');
	p1 = loadImage('assets/p1.png');
	p2 = loadImage('assets/p2.png');
	p3 = loadImage('assets/p3.png');
	p4 = loadImage('assets/p4.png');
	p5 = loadImage('assets/p5.png');
	p6 = loadImage('assets/p6.png');
	uprock = loadImage('assets/rockUp.png');
	downrock = loadImage('assets/rockDown.png');
}

function setup() {
	canvas = createCanvas(1119, innerHeight -100);
	canvas.class("canvas")
	// reset = createButton("Reset").attribute("id", "resetButton");
	// reset.mousePressed(resetGame);
	// mic = new p5.AudioIn();
	// voice = createButton("Move with Sound")
	// voice.mousePressed(voiceMode);
	// slider = createSlider(0, 0.5, 0.1, 0.01); // setup a slider for volume controls
	
	//player
	rick = new Rick();
	player = floor(random(6));

	// obstacles
	pipes.push(new Pipe()); // create initial pipe
	
	//difficulty slider
	createP('Difficulty:').addClass('text').style('display', 'inline');
	sliderDiff = createSlider(0, 10, 1, 1).style('display', 'inline'); // slider for difficulty controls

	FSM = new FiniteStateMachine("INTRO");
  	initializeStates(FSM);
}

// function voiceMode() {
// 	mic.start();
// }

function draw() {
	background(bg);
	// let volume = mic.getLevel();

	if (!pause){
		difficulty = sliderDiff.value();
	}

	FSM.run();
}

// lives display
function showLives() {
	if (rick.lives == 0){
		rick.score = distance;
		console.log("SCORE:" + rick.score);
		FSM.next()
	} else {
	for (let i = 0; i < rick.lives; i++){
    		fill((i<rick.lives)?(color(0,255,0)):(color(255,0,0)));
    		rect(10+30*i,20,20,20);
    		// change to images later
    		// image(life, 30, 20, 48, 48);
    	}
    }

}
		
 function reset() {
      pipes = [];
      pipes.speed = 2;
      rick.score = 0;
      rick.lives = 5;
  }

	//show sound level and threshold
// 	let thresholdTop = slider.value();
// 	let thresholdBottom = 0.1
// 	if (volume > thresholdTop && !noise){
// 		noise = true;
// 		rick.up();
// 	}
// 	if (volume < thresholdBottom) {
// 		noise = false;
// 	}

// 	fill(0, 255, 0);
// 	let y = map(volume, 0, 1, height, 0); 
// 	rect(width-50, y, 50, height - y);
// 	let threshy = map(thresholdTop, 0, 1, height, 0);
// 	stroke(255, 0, 0);
// 	strokeWeight(4);
// 	line(width-50, threshy, width, threshy);
// }