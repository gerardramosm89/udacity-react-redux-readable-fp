const express = require('express');
const multer = require('multer');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const socketIO = require('socket.io');
const fs = require('fs');
// Create the app with express
const app = express();

// Using http instead to create the server
var server = http.createServer(app);

const path = require('path');
// app.use(morgan('combined'));
app.use(cors());
// app.use(bodyParser.json({ limit: '10mb', type: '*/*'}));
app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({limit: '500mb', extended: false}));

//serve our static files
const port = process.env.PORT || 3081;
app.use(express.static(__dirname + '/'));

// viewed at http://localhost:8081
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

server.listen(port, function(){
    console.log(`Express server is up on port ${port}`);
});

