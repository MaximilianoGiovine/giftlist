const mongoose = require('mongoose');

const dbcon = async () => {
    try {
        await mongoose.connect('mongodb+srv://Maximiliano:FTVxsVoNiVZEXnRl@moviesdata.hgc9u.mongodb.net/GiftList', {
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = dbcon;