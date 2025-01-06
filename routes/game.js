const router = require('express').Router();
const controller = require('../controllers/query_Builder');
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