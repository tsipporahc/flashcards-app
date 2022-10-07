const express = require('express');

const app = express(); // returns express app

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.send('<h1>I love you<h1>');

}); // root route

app.get('/hello', (req, res) => {
    res.send('<h1>Hello YOU!!<h1>');

});


//set up developer server using the listen method
app.listen(3000, () => {
    console.log('The app running on localhost:3000');
}); // 3000 is port number