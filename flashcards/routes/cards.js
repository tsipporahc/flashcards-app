const express = require('express');
const router = express.Router();
const data = require('../data/flashcardData.json').data;
const { cards } = data;

router.get('/', (req, res) => {
    const numberofCards = cards.length;
    const randomId = Math.floor(Math.random() * numberofCards);
    res.redirect(`/cards/${randomId}?side=question`);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const { side } = req.query; // question or answer side of card

    if (!side) {
        return res.redirect(`/cards/${id}?side=question`);
    }
    const name = req.cookies.username;
    const text = cards[id][side];
    const { hint } = cards[id];
    const templateData = { id, side, text, name };

    if (side === 'question') {
        templateData.hint = hint;
        templateData.sideToFlip = 'answer';
        templateData.sideText = 'Answer';
    } else if (side === 'answer') {
        templateData.sideToFlip = 'question';
        templateData.sideText = 'Question';
    }

    res.render('cards', templateData);
}); //cards route

module.exports = router;
