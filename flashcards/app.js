const express = require('express');

const app = express(); // returns express app

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');

}); // root route


app.get('/cards', (req, res) => {
    res.render('cards', {prompt: 'Who love you?', hint: 'the person that created this app'});

}); //cards route


//set up developer server using the listen method
app.listen(3000, () => {
    console.log('The app running on localhost:3000');
}); // 3000 is port number