var express = require('express');

// Creating our app
var app = express();

// Exposes a directory called public
app.use(express.static('public'));

app.listen(3000, function() {
    console.log('Express server is up on port 3000');  
})