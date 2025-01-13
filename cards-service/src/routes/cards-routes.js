const express = require('express');
const createCards = require('../controllers/cards-controller');
const router = express.Router();

router.post('/create', (req, res) => {
    const data = createCards(req, res);
    res.send(data);
});

module.exports = router;

