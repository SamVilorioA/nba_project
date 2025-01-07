const TeamModel = require('../models/Team');
const teamModel = require('../models/Team');

const teamController ={
    campos: false, //pendiente pasar los campos a mostrar
    getAllTeams: (req, res) => {
        teamModel.getAllTeams('EQUIPO_ID, NOMBRE, CIUDAD, CAMPEONATOS',(err, results) => {
            if(err) return res.status(500).json({error: err.message});
            if(results.length < 1) res.status(404).json({Error: 'No se encontraron registros!'});
            res.status(200).json(results);
        });
    },
    getTeamById: (req, res) => {
        let filtro = req.params.teamId;
        const condicion = `EQUIPO_ID = ${filtro}`;
        teamModel.getTeamById('EQUIPO_ID, NOMBRE, CIUDAD, CAMPEONATOS', condicion, (err, results) => {
            if(err) return res.status(500).json({error: err.message});
            if(results.length < 1) res.status(404).json({Error: 'No se encontraron registros!'});
            res.status(200).json(results);
        });
    },
    getTeamsByConference: (req, res) => {
        
    },
    getTeamsByDivision: (req, res) => {},
    updateTeam: (req, res) => {
        const campos = setCampos(req.body); 
        if(!campos) res.status(400).json({Error: 'Solicitud no procesada por falta de informacion.'});
        let condicion = setFiltros('EQUIPO_ID', 'teamId', req.params);
        TeamModel.updateTeam(campos, condicion, (err, results) => {
            if(err) return res.status(500).json({error: err.message});
            if(results.length < 1) res.status(404).json({Error: 'No se encontraron registros!'});
            res.status(200).json(results);
        });
    },
    customQuery: (req, res) =>{
        const customQuery = req.body.customQuery;
        teamModel.getDataCustomQuery(customQuery, (err, results) =>{
            if(err) return res.status(500).json({error: err.message});
            if(results.length < 1) res.status(404).json({Error: 'No se encontraron registros!'});
            res.status(200).json(results);
        });
    }
}
function setCampos(requestBody = null){
    if(!requestBody) return null;
    let nombre = requestBody.nombre ? `NOMBRE = \'${requestBody.nombre}\' ` : 'NOMBRE=NOMBRE';
    let ciudad = requestBody.ciudad ? `CIUDAD = \'${requestBody.ciudad}\' ` : 'CIUDAD=CIUDAD';
    let campeonatos = requestBody.campeonatos ? `CAMPEONATOS = \'${requestBody.campeonatos}\'` : 'CAMPEONATOS=CAMPEONATOS';
    
    if(!requestBody.nombre && !requestBody.ciudad && !requestBody.campeonatos) return null;
    
    return `${nombre}, ${ciudad}, ${campeonatos}, FECHA_ACTUALIZACION = NOW()`;
}
function setFiltros(campo = 'EQUIPO_ID', propiedad = null ,requestBody = null){
    if(!propiedad) return null;
    if(!requestBody) return null;
    const filtro = requestBody.teamId ? `${campo} = ${requestBody[propiedad]}` : null;
    return filtro;
}
module.exports = teamController;