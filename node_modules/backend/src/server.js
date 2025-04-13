const express = require('express');
const router = require('./routes'); // Asegúrate de que este archivo sea el correcto
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(express.json()); // Parse JSON request bodies
app.use((req, res, next) => {
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);
    next();
});
app.use('/', (req, res, next) => {
    console.log('Middleware para /GiftList activado');
    next();
}, router);
module.exports = app;