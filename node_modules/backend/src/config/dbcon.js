const mongoose = require('mongoose');
require('dotenv').config(); // Carga las variables de entorno

mongoose.set('strictQuery', true); // O false, según lo que prefieras

const dbcon = async () => {
    try {
        const mongoUri = process.env.MONGO_URI; // Usa la variable de entorno
        if (!mongoUri) {
            throw new Error('MONGO_URI no está definida');
        }
        await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = dbcon;