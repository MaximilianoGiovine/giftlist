const axios = require('axios');
const Gift = require('./src/models/giftModel.js');
const renderGiftList = require('./src/GiftList/giftList');

document.addEventListener('DOMContentLoaded', () => {
    renderGiftList(); // Renderiza la lista de regalos al cargar la página
});
