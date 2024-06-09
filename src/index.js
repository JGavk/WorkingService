const express = require('express');
const { Pool } = require('pg');
const dbConfig = require('./expressBackend/dbConfig');

const pool = new Pool(dbConfig);

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON del cuerpo de las solicitudes
app.use(express.json());

// Ruta de ejemplo para manejar la solicitud GET a '/'
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