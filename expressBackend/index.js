const express = require('express');
const { Pool } = require('pg');
const dbConfig = require('./dbConfig');

const pool = new Pool(dbConfig);

const app = express();
const port = 3000;
//Añadir rutas para los diferentes funcionamientos -Juan
app.get('/', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT NOW()');
        res.send(result.rows);
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});

