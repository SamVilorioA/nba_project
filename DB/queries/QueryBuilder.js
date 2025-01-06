class dbQueries {
    constructor(table){
        this.table = table;
    }
    select(campos = '*', condiciones = null){
        console.log(campos);
        if(!condiciones)
            return `SELECT ${campos} FROM ${this.table}`
        return `SELECT ${campos} FROM ${this.table} WHERE ${condiciones}`;
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