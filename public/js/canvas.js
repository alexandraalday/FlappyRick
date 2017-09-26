// Based in part on Dan Shiffman's p5.js coding challenge #31 - Flappy Bird tutorial.
// theme from Trap Music Now https://youtu.be/9szNGXja85M
// sounds from www.sounds-resource.com
// images from www.spriters-resource.com


let canvas;
let rick;
let pipes = [];
let uprock;
let downrock;
let pause = false;
let player;
let difficulty;
let distance;
let theme;
let gameover;
// let mic;
// let voice;
// let slider;
// let noise = false;


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
	theme = loadSound('assets/rick-morty-get-schwifty-trap.mp3');
	gameover = loadSound('assets/damnLook.wav'); 
	rockhit1 = loadSound('assets/rockhit1.wav');
	rockhit2 = loadSound('assets/rockhit2.wav');
	rockhit3 = loadSound('assets/rockhit3.wav');
	rockhit4 = loadSound('assets/rockhit4.wav');

}

function setup() {
	canvas = createCanvas(1119, innerHeight -100);
	canvas.class("canvas");


	//difficulty slider section
	textDiff = createP('Difficulty:').addClass('slider').style('display', 'inline');
	textDiff.position(1000, 60)
	textDiff.style('color', '#ffffff');
	sliderDiff = createSlider(1, 10, 1, 1).style('display', 'inline'); // slider for difficulty controls
	sliderDiff.position(1000, 80);
	sliderDiff.style('max-width', '100px');
	textDiff.hide();
	sliderDiff.hide();
	
	//player
	rick = new Rick();
	player = floor(random(6));

	// obstacles
	pipes.push(new Pipe()); // create initial pipe

	// mic = new p5.AudioIn();
	// voice = createButton("Move with Sound")
	// voice.mousePressed(voiceMode);
	// slider = createSlider(0, 0.5, 0.1, 0.01); // setup a slider for volume controls

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
    	}
    }
}
		
 function reset() {
      pipes = [];
      pipes.speed = 2;
      rick.score = 0;
      rick.lives = 5;
      textDiff.hide();
      sliderDiff.hide();
  }

	// show sound level and threshold

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