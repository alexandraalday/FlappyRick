function initializeStates(FSM) {

	// Initialize the game state machine 
	var IntroState = new State("INTRO", "GAME", introStateRun);
	var GameState = new State("GAME", "GAMEOVER", gameStateRun, gameStateInit);
	var GameOverState = new State("GAMEOVER", "INTRO", gameOverStateRun, gameOverStateInit);

	FSM.addState(IntroState);
	FSM.addState(GameState);
	FSM.addState(GameOverState);

	function introStateRun() {
		if (keyIsPressed) {  // enter key
		  if (keyCode === 13){
		  	FSM.next();
		  }
		}
  	}

	function gameStateInit() {
		select('.container').hide();
		select('#overlay').hide();
		theme.loop();
		theme.setVolume(0.3);
		textDiff.show();
		sliderDiff.show();
	}

	function gameStateRun() {

		if (keyIsDown(UP_ARROW)) {
			rick.up();
		}

		if (keyIsDown(ESCAPE)) {
			FSM.next();
		}

		rick.update(); // falling action
		rick.show(); // hello rick!


		// infinite pipes
		if (frameCount % floor(1360 / (4 * difficulty)) == 0){ 
			pipes.push(new Pipe());
		}

		for (let i = pipes.length-1; i >= 0; i--){
			pipes[i].show();
			pipes[i].update();

			if (pipes[i].hits(rick)) { // check for hits
				console.log("OUCH!")
				smack = floor(random(4));
				player = floor(random(6));
			}

			if (pipes[i].disappear()){ // when the pipe disappears, remove it
				pipes.splice(i, 1);
			}
		}

		// score board
		fill(27,53,61);
	  	let scoreboard = rect(20, 50, 180, 30);
	  	fill(255);
	  	textSize(20);
		text("Distance:", 30, 70, 8);
	  	// scoreboard.attribute("id", "scoreBoard");
		  	
	  	//score
	  	distance = frameCount/100;
	  	fill(98,204,214);
	  	textSize(20);
		text(distance, 130, 70, 10);

		// lives
		showLives();
	}

	function gameOverStateInit() {
		select('.container').show();
		let textbox = select('#overlay');
		textbox.html("<h1 class='flash'>GAME OVER!</h1><br/>SCORE: " + rick.score + "<br/><div id='morty-says'><h2>Oh, snap! Press Enter to play again.</h2><h4>If you logged in, click 'Submit Score' to donate to the Citadel of Ricks redevelopment fund.</h4></div><img id='morty' src='assets/morty.png'>");
		textbox.style("padding-top", "100px");
		textbox.show();
		theme.stop();
		gameover.play();

		//reset functions
		reset();
	}

	function gameOverStateRun() {
		if (keyIsDown(13)) {
			FSM.next();
		}
	}
}
