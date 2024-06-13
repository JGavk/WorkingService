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

app.use('/api', [
    require('./expressBackend/route/authRoutes')
]);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});