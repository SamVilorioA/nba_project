const db = require('../DB/db');
const queryBuilder = require('../DB/queries/QueryBuilder');
const playerQueryBuilder = new queryBuilder('JUGADOR');

const PlayerModel = {
    getAllPlayers: (campos,callback) =>{
        db.query(playerQueryBuilder.select(campos), callback)
    },
    getPlayerById: (campos, condicion, callback) => {
        db.query(playerQueryBuilder.select(campos, condicion), callback)
    }, 
    getPlayerStats:(queryString, callback) => {
        db.query(playerQueryBuilder.customQuery(queryString), callback)
    },
    updatePlayer: (campos, filtro, callback) =>{
        db.query(playerQueryBuilder.update(campos, filtro), callback)
    },
    getDataCustomQuery:(queryString, callback) => {
        db.query(playerQueryBuilder.customQuery(queryString), callback)
    }
}
module.exports = PlayerModel;