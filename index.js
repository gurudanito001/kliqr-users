const express = require("express");
const app = express();
const pool = require("./db");

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


app.listen( 5000, () => {
    console.log(`server is listening on port 5000`)
});