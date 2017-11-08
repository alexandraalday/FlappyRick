const app = angular.module('flappyrick', []);

	app.controller('mainController', ['$http', function($http) { 
		let controller = this;
		this.message;
  		this.url = 'https://flappyrick-api.herokuapp.com';
		this.user = {};
		this.userPass = {};
		this.showRegister = false;
  		this.showLogin = false;
  		this.loggedin = false;
  		this.showProfile = false;
  		this.showUpdate = false;
  		this.userScores = [];
  		this.highScore;
  		this.totalScore;

		this.register = function(userReg){
		    $http({
		      method: 'POST',
		      url: this.url + '/users',
		      data: { user: {
		        username: userReg.username,
		        password: userReg.password
		      }}
		    }).then(function(response) {
		      controller.message = "Success!";
		    })
		  }

		this.login = function(userPass) {
	    	$http({
		    	method: 'POST',
		    	url: this.url + '/users/login',
		    	data: { user: { username: userPass.username, password: userPass.password }}
		    }).then(function(response) {
		     	this.user = response.data.user;
		     	localStorage.setItem('token', JSON.stringify(response.data.token));
		     	this.showLogin = false;
      			this.showRegister = false;
      			this.loggedin = true;
      			this.getScores(this.user);
    		}.bind(this));
    	}

		this.logout = function() {
		  localStorage.clear('token');
		  this.loggedin = false;
		  location.reload();
		}

		this.update = function(userUp) {
	    	$http({
		    	method: 'PUT',
		    	headers: {
        			Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
     			},
		    	url: this.url + '/users/' + this.user.id,
		    	data: { user: { username: userUp.username, password: userUp.password }},
		    }).then(function(response) {
		     	controller.login(userUp);
		     	controller.message = "Success!";
		     	controller.user = response.data.user;
    		}.bind(this));

	  	}

		this.delete = function() {
	    	$http({
		    	method: 'DELETE',
		    	headers: {
        			Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
     			},
		    	url: this.url + '/users/' + this.user.id
		    }).then(function(response) {
		      	controller.logout();
    		}.bind(this));
	  	}

		// display/hide user forms
		this.goRegister = function(){
		  	this.showRegister = true;
		    this.showLogin = false;
		}
		this.goLogin = function(){
		    this.showLogin = true;
		    this.showRegister = false;
		}
		this.goUpdate = function() {
		    this.showUpdate = true;
		}
		this.registerForm = function(){
		    if(this.showRegister) {
		    }
		    else {
		      this.showRegister = !this.showRegister;
		    }
		}
		this.loginForm = function(){
		    if(this.showLogin){
		    }
		    else {
		      this.showLogin = !this.showLogin;
		    }
		}
		this.updateForm = function(){
		    if(this.showUpdate) {
		    }
		    else {
		      this.showUpdate = !this.showUpdate;
		    }
		}

		this.addScore = function() {
			let score = document.getElementById('overlay');
    		score.innerHTML = score.innerText || score.textContent;
			let userDistance = parseFloat(score.innerHTML.split('SCORE: ')[1]).toFixed(2);
			let userDifficulty = sliderDiff.value();
	    	$http({
		    	method: 'POST',
		    	url: this.url + '/users/' + this.user.id + '/scores',
		    	data: { score: { 
		    		distance: userDistance,
		    		difficulty: userDifficulty,
		    		user_id: controller.user.id
		    	}}
		    }).then(response=>{
		      	this.getScores(this.user);
    		}).catch(err=> console.log(err))
    	}

		this.getScores = function(user) {
		    $http({
		      url: this.url + '/users/' + this.user.id,
		      method: 'GET',
		      headers: {
		        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
		      }
		    }).then(function(response) {
		      controller.userScores = response.data.scores;
		      let scores = [];
		      for (let i = 0; i < controller.userScores.length; i++){
		      	scores.push(parseFloat(controller.userScores[i].distance)).toFixed(2);
		      }
		      
		      controller.totalScore = scores.reduce(function(a, b) {
    			return a + b;
			  });

		      controller.highScore =  scores.reduce(function(a, b) {
    			return Math.max(a, b);
				});
		    }.bind(this));
		  }

	}]);