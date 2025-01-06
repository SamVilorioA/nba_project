const express = require('express');
const router = express.Router();

//importing routes
const teamRoute = require('../routes/team');
const playerRoute = require('../routes/player');
const gameRoute = require('../routes/game');

router.get('/', (req, res) =>{
    res.send('Welcome to NBA project!');
});
//Route Middlewares
router.use('/team', teamRoute);
router.use('/player', playerRoute);
router.use('/games', gameRoute);

module.exports = router;