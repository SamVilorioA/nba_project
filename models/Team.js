const db = require('../DB/db');
const queryBuilder = require('../DB/queries/QueryBuilder');
const teamQueryBuilder = new queryBuilder('EQUIPO');

const TeamModel = {
    getAllTeams: (campos,callback) =>{
        db.query(teamQueryBuilder.select(campos), callback)
    },
    getTeamById: (campos, condicion, callback) => {
        db.query(teamQueryBuilder.select(campos, condicion), callback)
    },
    updateTeam: (campos, filtro, callback) =>{
        db.query(teamQueryBuilder.update(campos, filtro), callback)
    },
    getDataCustomQuery:(queryString, callback) => {
        db.query(teamQueryBuilder.customQuery(queryString), callback)
    }
}
module.exports = TeamModel;