const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('cards', {prompt: 'Who love you?', hint: 'the person that created this router'});

}); //cards route

module.exports = router;