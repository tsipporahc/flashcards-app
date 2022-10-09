const express = require('express');
const router = express.Router(); // router is a mini-router in express thats holds middlewares and routes

router.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('index', {name});
    } else{
        res.redirect('/hello');
    }
    

}); // root route




router.get('/hello', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.redirect('/');
    } else{
        res.render('hello');
    }

}); //hello route will render hello template page

router.post('/hello', (req, res) => {
    res.cookie('username', req.body.username); //set the cookie when the user submits the form to the post route
    res.redirect('/');

}); //hello POST route for form will render hello template

router.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');

});// index post route, click button and it deletes cookies from response object

module.exports = router; //export router to app.js