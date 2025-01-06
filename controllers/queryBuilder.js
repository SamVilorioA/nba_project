const db = require('../DB/db');


class queryBuilder{
    constructor(table){
        this.table = table
    }
    async select(campos = '*', condicion = ''){
        const queryString = `SELECT ${campos} FROM ${this.table} WHERE ${condicion}`;
        await db.query(queryString, (err, results) => {
            if(err) return err;
            else return results;
        });  
    }
    async selectAll(){
        const queryString = `SELECT * FROM ${this.table}`;
        await db.query(queryString, (err, results) => {
            console.log(results, err);
            if(err) return err;
            else return results;
        });  
    }
}
function query(queryStr = null){
    connection.query(queryStr, (err, results)=>{
        if(err){
            return err;
        }
        return results;
    });
} 

module.exports = queryBuilder;