const axios = require('axios');
const Gift = require('../models/Gift');

const fetchGifts = async () => {
    try {
        const gifts = await Gift.find();
        return gifts.map(gift => ({
            id: gift._id.toString(), // Transforma _id en id
            gift: gift.gift,
            status: gift.status
        }));
    } catch (error) {
        console.error('Error fetching gifts:', error);
        throw error;
    }
}

const createGift = async (gift) => {
    try {
        const newGift = await Gift.create(gift);
        return newGift;
    } catch (error) {
        console.error('Error creating gift:', error);
        throw error;
    }
}

const updateGiftStatusService = async (id, status) => {
    try {
        const gift = await Gift.findById(id);

        if (gift) {
            gift.status = status;
            await gift.save();
            return gift;
        }

        return null;
    } catch (error) {
        console.error('Error actualizando el estado del regalo:', error);
        throw error;
    }
};

module.exports = {
    fetchGifts,
    createGift,
    updateGiftStatusService
};