const app = angular.module('flappyrick', []);

	app.controller('mainController', ['$http', function($http) { 
		this.message = "wubba lubba dub dub";
		let controller = this;
  		// server location
  		this.url = 'https://localhost:3000';
  		// users
		this.user = {};

		// user log in and set token in localStorage
		this.login = function(userPass) {
	    	console.log(userPass);

	    	$http({
		    	method: 'POST',
		    	url: this.url + '/users/login',
		    	data: { user: { username: userPass.username, password: userPass.password }},
		    }).then(function(response) {
		      	console.log(response);
		     	this.user = response.data.user;
		     	localStorage.setItem('token', JSON.stringify(response.data.token));
    		}.bind(this));

	  	}

	  	//user log out
		this.logout = function() {
		  localStorage.clear('token');
		  location.reload();
		}


	}]);