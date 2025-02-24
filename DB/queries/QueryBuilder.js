class dbQueries {
    constructor(table){
        this.table = table;
    }
    select(campos = '*', condiciones = null){
        if(!condiciones)
            return `SELECT ${campos} FROM ${this.table}`
        return `SELECT ${campos} FROM ${this.table} WHERE ${condiciones}`;
    }
    selectWithJoin(campos ='*', condiciones = null, join=null){
        if(!join) return `SELECT * FROM ${this.table}`;
        if(!condiciones) return `SELECT * FROM ${this.table} JOIN ${join}`;
        return `SELECT ${campos} FROM ${this.table} JOIN ${join} WHERE ${condiciones}`;
    }
    update(campos = null, filtro = null){
        if(!campos) return null;
        return `UPDATE ${this.table} SET ${campos} WHERE ${filtro}`;
    }
    insert(campos = '', valores = null){
        if(!valores) return false;
        return `INSERT INTO ${this.table} (${campos}) VALUES (${valores})`;
    }
    customQuery(queryString=null){
        if(!queryString) return `SELECT * FROM ${this.table}`;
        return queryString;
    }
}

module.exports = dbQueries;