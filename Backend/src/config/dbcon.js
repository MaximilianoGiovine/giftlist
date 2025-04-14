const mongoose = require('mongoose');
require('dotenv').config({ path: './src/.env' }); // Carga el archivo .env desde la ruta especificada
const dbcon = async () => {
    try {
        const mongoUri = process.env.MONGO_URI; // Usa la variable de entorno
        if (!mongoUri) {
            throw new Error('MONGO_URI no está definida');
        }
        mongoose.set('strictQuery', true); // Configuración para evitar la advertencia de Mongoose
        await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = dbcon;