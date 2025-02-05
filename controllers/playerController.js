const PlayerModel = require('../models/Player');

const playerController ={
    campos: false, //pendiente pasar los campos a mostrar
    getAllPlayers: (req, res) => {
        PlayerModel.getAllPlayers('JUGADOR_ID, NOMBRE, APELLIDO, FECHA_NACIMIENTO, PAIS_ORIGEN, NACIONALIDAD, POSICION',(err, results) => {
            if(err) return res.status(500).json({error: err.message});
            if(results.length < 1) res.status(404).json({Error: 'No se encontraron registros!'});
            res.status(200).json(results);
        });
    },
    getPlayerById: (req, res) => {
        let filtro = req.params.playerId;
        const condicion = `JUGADOR_ID = ${filtro}`;
        PlayerModel.getPlayerById('JUGADOR_ID, NOMBRE, APELLIDO, FECHA_NACIMIENTO, PAIS_ORIGEN, NACIONALIDAD, POSICION', condicion, (err, results) => {
            if(err) return res.status(500).json({error: err.message});
            if(results.length < 1) res.status(404).json({Error: 'No se encontraron registros!'});
            res.status(200).json(results);
        });
    },
    getPlayersByConference: (req, res) => {
        
    },
    getPlayersByTeam: (req, res) => {},
    getPlayerStats: (req, res) => {
        const filtro = req.params.playerId;
        const queryString = `
                        SELECT 
                            count(epj.PARTIDO_ID) as PARTIDOS,
                            (SUM(epj.TIROS_ANOTADOS)*2 + (epj.TIROS_LIBRES_ANOTADOS))/COUNT(epj.PARTIDO_ID) AS PPG, 
                            AVG(epj.ASISTENCIAS) AS APG,
                            AVG(epj.REBOTES) AS RPG,
                            AVG(epj.ROBOS) AS SPG,
                            AVG(epj.BLOQUEOS) AS BPG,
                            (SUM(epj.TIROS_ANOTADOS) / SUM(epj.TIROS_INTENTADOS)) AS 'FG%',
                            (SUM(epj.TIROS_LIBRES_ANOTADOS) / SUM(epj.TIROS_LIBRES_INTENTADOS)) AS 'FT%' 
                        FROM ESTADISTICA_PARTIDO_JUGADOR epj
                        WHERE epj.JUGADOR_ID  = ${filtro};`
        PlayerModel.getPlayerStats(queryString, (err, results) => {
            if(err) return res.status(500).json({error: err.message});
            if(results.length < 1) res.status(404).json({Error: 'No se encontraron registros!'});
            res.status(200).json(results);
        });
    },
    updatePlayer: (req, res) => {
        const campos = setCampos(req.body); 
        if(!campos) res.status(400).json({Error: 'Solicitud no procesada por falta de informacion.'});
        let condicion = setFiltros('EQUIPO_ID', 'teamId', req.params);
        PlayerModel.updatePlayer(campos, condicion, (err, results) => {
            if(err) return res.status(500).json({error: err.message});
            if(results.length < 1) res.status(404).json({Error: 'No se encontraron registros!'});
            res.status(200).json(results);
        });
    },
    customQuery: (req, res) =>{
        const customQuery = req.body.customQuery;
        PlayerModel.getDataCustomQuery(customQuery, (err, results) =>{
            if(err) return res.status(500).json({error: err.message});
            if(results.length < 1) res.status(404).json({Error: 'No se encontraron registros!'});
            res.status(200).json(results);
        });
    }
}
function setCampos(requestBody = null){
    if(!requestBody) return null;
    /*let nombre = requestBody.nombre ? `NOMBRE = \'${requestBody.nombre}\' ` : 'NOMBRE=NOMBRE';
    let ciudad = requestBody.ciudad ? `CIUDAD = \'${requestBody.ciudad}\' ` : 'CIUDAD=CIUDAD';
    let campeonatos = requestBody.campeonatos ? `CAMPEONATOS = \'${requestBody.campeonatos}\'` : 'CAMPEONATOS=CAMPEONATOS';
    
    if(!requestBody.nombre && !requestBody.ciudad && !requestBody.campeonatos) return null;
    
    return `${nombre}, ${ciudad}, ${campeonatos}, FECHA_ACTUALIZACION = NOW()`; */
    return null;
}
function setFiltros(campo = 'JUGADOR_ID', propiedad = null ,requestBody = null){
    if(!propiedad) return null;
    if(!requestBody) return null;
    const filtro = requestBody.teamId ? `${campo} = ${requestBody[propiedad]}` : null;
    return filtro;
}
module.exports = playerController;