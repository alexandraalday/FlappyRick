//dependencies
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//server
const server = 


//middleware
app.use(express.static('public'));



//port
app.listen(port, ()=>{
  console.log('wubba lubba dub dub');
  console.log('Server running on this port: ' + port);
});