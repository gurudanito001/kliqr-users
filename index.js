const express = require("express");
const app = express();
const pool = require("./db");
const config = require("./config");

app.use(express.json()) // => req.body

//ROUTES//

//get all users
app.get("/users", async (req, res) => {
    try {
        const allUsers = await pool.query("SELECT * from users");
        res.json(allUsers.rows);
    } catch (err) {
        console.error(err.message)
    }
});


//get a user
app.get("/users/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await pool.query(
            "SELECT * FROM users WHERE id = $1", 
            [id]
        );
        res.json(user.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

/* app.get('/db', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM users');
        const results = { 'results': (result) ? result.rows : null };
        res.render('pages/db', results);
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
})  */


app.listen( config.PORT, () => {
    console.log(`server is listening on port ${config.PORT}`)
});