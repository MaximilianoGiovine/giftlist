const mongoose = require('mongoose');

const giftSchema = new mongoose.Schema({
    gift: { type: String, required: true },
    status: { type: String, required: true }
});

const Gift = mongoose.model('Gift', giftSchema);

module.exports = Gift;