const Gift = require('../models/giftModel');

// Define la URL directamente
const API_URL = 'https://giftlist-back.onrender.com/';

const fetchGifts = async () => {
    try {
        const response = await fetch(`${API_URL}/GiftList`);
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        return data.map(gift => Gift.fromApiResponse(gift));
    } catch (error) {
        console.error('Error fetching gifts:', error);
        throw error;
    }
};

const updateGiftStatus = async (giftName, status) => {
    try {
        const response = await fetch(`${API_URL}/GiftList/${giftName}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status })
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error updating gift status:', error);
        throw error;
    }
};

module.exports = { fetchGifts, updateGiftStatus };