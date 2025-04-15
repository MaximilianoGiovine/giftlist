const Gift = require('../models/giftModel');

const fetchGifts = async () => {
    try {
        const response = await fetch('https://giftlist-back.onrender.com/GiftList');
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        return data.map(gift => Gift.fromApiResponse(gift)); // Transforma los datos en instancias del modelo Gift
    } catch (error) {
        console.error('Error fetching gifts:', error);
        throw error;
    }
};

const updateGiftStatus = async (giftName, status) => {
    try {
        const response = await fetch(`https://giftlist-back.onrender.com/GiftList/${giftName}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status })
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        return await response.json(); // Devuelve la respuesta de la API
    } catch (error) {
        console.error('Error updating gift status:', error);
        throw error;
    }
};

module.exports = { fetchGifts, updateGiftStatus };