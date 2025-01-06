const router = require('express').Router();
const QueryBuilder = require('../controllers/query_Builder');
const Team = require('../models/Player');
const playerQueryBuilder = new QueryBuilder('JUGADOR');
router.get('/jugadores', async(resp, req) =>{
    try{
        const Player = { message: 'Player base'};
        resp.json(Player);
    } catch(error){
        resp.json({message: error});
    }
});
module.exports = router;