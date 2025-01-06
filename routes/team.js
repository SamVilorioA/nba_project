const router = require('express').Router();
const queryBuilder = require('../controllers/queryBuilder');
//const Team = require('../models/Team');
const teamQueryBuilder = new queryBuilder('EQUIPO');
router.get('/all', (req, res) =>{
    try{
        //const queryString = 'SELECT NOMBRE, CIUDAD FROM EQUIPO;'
        //const Team = await queryBuilder(queryString);
        const Teams = teamQueryBuilder.selectAll();
        //resp.json(Teams)
        console.log(Teams);
        res.json({'Equipos':Teams});
    } catch(error){
        res.status(500).send(error)
        //console.log(error);
        //resp.json({message: error});
    }
    return;
});
router.get('/:teamId', async (req, res) =>{
    try{
        const campos = 'EQUIPO_ID, NOMBRE, CIUDAD, CAMPEONATOS';
        const condicion =  `EQUIPO_ID = \'${req.params.teamId}\'`;
        //console.log(campos, condicion);
        const Team = await teamQueryBuilder.select(campos, condicion);
        //console.log(Team);
        res.status(200).send(Team);
    } catch(error){
        res.status(500).send(error);
        //console.log(error);
    }
});
module.exports = router;