const mongoose = require('mongoose');

const dbcon = async () => {
    try {
        const mongoUri = process.env.MONGO_URI; // Usa la variable de entorno
        await mongoose.connect(mongoUri, {});
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = dbcon;