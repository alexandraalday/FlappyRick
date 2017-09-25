function initializeStates(FSM) {

	/* Initialize the game state machine */
	var IntroState = new State("INTRO", "GAME", introStateRun);
	var GameState = new State("GAME", "GAMEOVER", gameStateRun, gameStateInit);
	var GameOverState = new State("GAMEOVER", "INTRO", gameOverStateRun, gameOverStateInit);

	FSM.addState(IntroState);
	FSM.addState(GameState);
	FSM.addState(GameOverState);

	function introStateRun() {
		if (keyIsPressed) {  // SPACEBAR
		  if (keyCode === 13){
		  	FSM.next();
		  }
		}
  	}

	function gameStateInit() {
		select('.container').hide();
		select('#overlay').hide();
		theme.play();
		theme.setVolume(0.3);
		textDiff.hide();
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
		  	distance = frameCount/100;
		  	fill(0, 255, 0);
		  	textSize(14);
			text(distance, 100, 70, 10);

		// lives
		showLives();
	}

	function gameOverStateInit() {
		select('.container').show();
		let textbox = select('#overlay');
		textbox.html("GAME OVER!<br />SCORE: " + rick.score);
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
