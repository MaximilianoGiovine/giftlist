const path = require('path');
const dotenv = require('dotenv');

// Configura dotenv para cargar el archivo .env
dotenv.config({ path: path.resolve(__dirname, '../.env') });

module.exports = process.env; // Exporta las variables de entorno