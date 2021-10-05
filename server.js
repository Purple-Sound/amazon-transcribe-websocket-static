const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('dist'));

//access-origin-allow-all
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// send index.html using path
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// route not found
app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

app.listen(8000, () => {
    console.log('Server started on port 8000');
});