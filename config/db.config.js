const Pool = require("pg").Pool;

const pool = new Pool({
    user:'postgres', // default postgres
    host:'localhost',
    database: process.env.PGDATABASE, 
    password:'', //added during PostgreSQL and pgAdmin installation
    port:'5432' //default port
});

module.exports = pool;