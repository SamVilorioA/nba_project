const router = require('express').Router();
const controller = require('../controllers/queryBuilder');
const Team = require('../models/Game');

router.get('/', async(resp, req) =>{
    try{
        const Team = { message: 'Game base'};
        resp.json(Team);
    } catch(error){
        resp.json({message: error});
    }
});
module.exports = router;