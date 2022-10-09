const express = require('express');
const bodyParser =  require('body-parser');
const cookieParser = require('cookie-parser');

const app = express(); // returns express app
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards')

app.use(mainRoutes); // this is where all the routes are
app.use('/cards', cardRoutes);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
}) // 404 error

app.use((err, req, res, next) => {
    res.locals.error = err; // set locals to the errror object
    res.status(err.status);
    res.render('error', err);
})// error handling with middleware


//set up developer server using the listen method
app.listen(3000, () => {
    console.log('The app running on localhost:3000');
}); // 3000 is port number