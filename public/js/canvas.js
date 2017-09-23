// Based in part on Dan Shiffman's p5.js coding challenge #31 - Flappy Bird tutorial.

let canvas;
let rick;
let pipes = [];
let uprock;
let downrock;
let button;
let start;
let pause = true;
// let mic;
// let voice;
// let slider;
// let noise = false;
let player;
let difficulty;


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
	// createCanvas(800, 600);
	canvas = createCanvas(innerWidth, innerHeight -100);
	canvas.class("canvas")
	start = createButton("Play").attribute("id", "playButton");
	start.mousePressed(startGame);
	reset = createButton("Reset").attribute("id", "resetButton");
	reset.mousePressed(resetGame);
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

}

function startGame() {
	pause = false;
}

function resetGame() {
 //add reset stuff here


}

// function voiceMode() {
// 	mic.start();
// }

function draw() {
	background(bg);

	// let volume = mic.getLevel();

	if (!pause){
		rick.update(); // falling action
		rick.show(); // hello rick!
		difficulty = sliderDiff.value();
		


		// infinite pipes
		if (frameCount % floor(1360 / (4 * difficulty)) == 0){ 
			pipes.push(new Pipe());
		}
		for (let i = pipes.length-1; i >= 0; i--){
			pipes[i].show();
			pipes[i].update();

			if (pipes[i].hits(rick)) { // check for hits
				console.log("OUCH!")
				player = floor(random(6));
			}

			if (pipes[i].disappear()){ // when the pipe disappears, remove it
				pipes.splice(i, 1);
			}
		}

		// score board
		fill(0,0,0);
	  	let scoreboard = rect(20, 50, 120, 40);
	  	fill(255);
	  	textSize(14);
		text("Distance:", 30, 70, 10);
	  	// scoreboard.attribute("id", "scoreBoard");
		  	//score
		  	let distance = frameCount/100;
		  	fill(0, 255, 0);
		  	textSize(14);
			text(distance, 100, 70, 10);

		// lives
		showLives();
	}
}

// lives display
function showLives() {
	if (rick.lives == 0){
		pause = true;
		// add a game over state here
	} else {
	for (let i = 0; i < rick.lives; i++){
    		fill((i<rick.lives)?(color(0,255,0)):(color(255,0,0)));
    		rect(10+30*i,20,20,20);
    		// change to images later
    		// image(life, 30, 20, 48, 48);
    	}
    }

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
 			//show pause menu eventually
        }
	}
}