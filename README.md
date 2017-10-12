## FlappyRick
https://flappyrick.herokuapp.com/

Rick and Morty take on flappy bird in this browser based, canvas game. Created in a one week sprint, Flappy Rick is a single-page, two model CRUD app built with MVC file organization. User authentication is handled through JSON Web Tokens. 

Currently, this game is only optimized for Chrome browsers. 

**Technologies Used:** 
* HTML
* CSS 
* JavaScript
* Node.js
* Express.js
* AngularJS
* P5.js
* Ruby
* Rails

**Server:** 
* https://flappyrick-api.herokuapp.com/

**Packages Used:** 
* JWT
* Express Session

**API Used:** 
* Self

**Design**
* Bootstrap
* Font Awesome

I wanted to practice using p5.js for canvas interactivity and was also able to experiment with two additional p5 libraries: p5.dom and p5.sound. These allowed me to manipuulate html elements outside of the canvas and add game sounds. Originally, I set up the game with p5.sound where the player had to shout at the computer mic to make Rick move up, but this made testing a little loud.  


Additionally, I did some research on game sequence so my game didn't immediately start when the page opened. I came across finite state machine design. This allows for different game states to be triggered and in which order. In this case, the triggers are the ENTER key and when a user has lost all their lives. This was my favorite part of this build, as this was completely uncharted territory and at times frustrating.  This application has three states: intro, gameplay, end. 

**Intro state**

![screencapture-flappyrick-herokuapp-1506480852290](https://user-images.githubusercontent.com/17508245/31506818-6e15eaa8-af2d-11e7-8f07-32d3d59267c0.png)

**Gameplay state:**

![screencapture-flappyrick-herokuapp-1506480880443 1](https://user-images.githubusercontent.com/17508245/31506810-6880d2b0-af2d-11e7-99fa-6f3aabf89a9a.png)

**End state:**

![screencapture-flappyrick-herokuapp-1506480917169](https://user-images.githubusercontent.com/17508245/31506815-6caeedea-af2d-11e7-8ac2-2bd6df41c459.png)


### User Stories: 
The user profile of this application is twofold:

First, general users of this application are people who wish to play without saving their scores.

* Users land on the home page and given instructions from Rick about how to save their scores or continue to free play
* Users have 5 lives and lose a life each time their Rick collides with an obstacle

Another user of this application is the registered user who logs in to maintain their own profile and scores.

* Registered users can log in to manage their profile content
* Registered users can add a final score to their saved scores
* Registered users can view their saved scores (with distance, difficulty, and time created), their all-time highscore, and their overall score
* Registered users can delete their account


### Features In Progress:
 - [ ]  Optimize for other browsers
 - [ ]  Create a leaderboard across all users
 - [ ]  Remove difficulty slider and convert to levels that increase in difficulty. 
 - [ ]  Save scores to server automatically on GAME OVER. Remove need for user to manually save their score.
 - [ ]  Allow for levels to be replayed instead of starting over entirely.
 - [ ]  Sound can be toggled on/off
 - [ ]  Add scream mode back, where users can move Rick by yelling and making other inhuman noises. 













