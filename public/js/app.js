const app = angular.module('flappyrick', []);

	app.controller('mainController', ['$http', function($http) { 
		this.message = "wubba lubba dub dub";
		let controller = this;
  		// server location
  		this.url = 'http://localhost:3000';
  		// users
		this.user = {};
		this.userPass = {};
		this.showRegister = false;
  		this.showLogin = false;
  		this.loggedin = false;
  		this.showProfile = false;
  		this.showUpdate = false;

		// create new user
		this.register = function(userReg){
		    $http({
		      method: 'POST',
		      url: this.url + '/users',
		      data: { user: {
		        username: userReg.username,
		        password: userReg.password
		      }},
		    }).then(function(response) {
		      console.log(response);
		      controller.login(userReg);
		    })
		  }

		// user login 
		this.login = function(userPass) {
	    	$http({
		    	method: 'POST',
		    	url: this.url + '/users/login',
		    	data: { user: { username: userPass.username, password: userPass.password }},
		    }).then(function(response) {
		      	console.log(response);
		     	this.user = response.data.user;
		     	localStorage.setItem('token', JSON.stringify(response.data.token));
		     	this.showLogin = false;
      			this.showRegister = false;
      			this.loggedin = true;
    		}.bind(this));

	  	}

	  	// user logout
		this.logout = function() {
		  localStorage.clear('token');
		  this.loggedin = false;
		  location.reload();
		}

		// user update 
		this.update = function(userUp) {
	    	$http({
		    	method: 'PUT',
		    	headers: {
        			Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
     			},
		    	url: this.url + '/users/' + this.user.id,
		    	data: { user: { username: userUp.username, password: userUp.password }},
		    }).then(function(response) {
		      	console.log(response);
		     	controller.login(userUp);

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


	}]);