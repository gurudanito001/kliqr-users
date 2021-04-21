const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "nwokocha95",
    database: "kliqr_users",
    host: "localhost",
    port: "5432"
});

module.exports = pool