//dependencies
const express = require('express');
const app = express();
const port = process.env.PORT || 2000;


//middleware
app.use(express.static('public'));



//port
app.listen(port, ()=>{
  console.log('wubba lubba dub dub');
  console.log('Server running on this port: ' + port);
});