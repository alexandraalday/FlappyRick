# PROJECT: FlappyRick

**LIVE SITE:** https://flappyrick.herokuapp.com/

**SUMMARY:** 
Rick and Morty take on flappy bird in this broswer based, canvas game. Created in a one week sprint. 

## APPROACH

**TECHNOLOGY USED:** HTML, CSS, JavaScript, Ruby on Rails, Node, Express, P5, AngularJS, JWT

**DESCRIPTION:** 
- Flappy Rick is a single-page, finite state game machine, two model CRUD app build with MVC file organization
  - Models: User (full CRUD), Scores with a one-to-many relationship

- User Stories:
  - Only registered and logged in users can view, create, edit, and delete their profiles. 
  - User can see all the scores they have saved to the server, including distance, difficulty, and time created. 
  - Users can see their total aggregate score and their highest score. 
  - App uses JWT authorization

 - Design:
   - HTML/CSS done with Bootstrap frameworks 
   - Browser based game, currently optimized for Google Chrome. 

**PLANNED FEATURES:** 
- Remove difficulty slider and convert to levels that increase in difficulty. 
- Save scores to server automatically on GAME OVER. Remove need for user to manually save their score.
- Allow for levels to be replayed instead of starting over entirely.
- Sound can be toggled on/off
- Add scream mode, where users can move Rick by yelling and making other inhuman noises. 
