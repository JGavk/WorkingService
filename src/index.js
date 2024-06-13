const express = require('express');
const { Pool } = require('pg');
const path = require('path'); 
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'expressBackend/public')));



app.use(bodyParser.urlencoded({extended : false}));

app.get('/', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT NOW()');
        client.release();
        res.send(`Hello World! Database time is: ${result.rows[0].now}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching time from database, please reload");
    }
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});