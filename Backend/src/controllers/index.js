const express = require('express');
const { fetchGifts, createGift, updateGiftStatusService } = require('../services/getGiftService');
const { fetchGiftByName } = require('../middlewares/fetchgiftbyname');

const getGifts = async (req, res) => {
    try {
        const gifts = await fetchGifts();
        res.json(gifts); // Devuelve los regalos con el id transformado
    } catch (error) {
        console.error('Error fetching gifts:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const postGifts = async (req, res) => {
    try {
        const newGift = await createGift(req.body);
        res.status(201).json(newGift);
    } catch (error) {
        console.error('Error creating gift:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateGiftStatus = async (req, res) => {
    try {
        const id = req.giftId; // Obtén el ID del regalo desde el middleware
        const { status } = req.body;

        if (!status) {
            console.error('El campo "status" es obligatorio.');
            return res.status(400).json({ error: 'El campo "status" es obligatorio.' });
        }

        console.log('ID recibido del middleware:', id); // Log para depuración
        console.log('Estado recibido del cuerpo:', status); // Log para depuración

        const updatedGift = await updateGiftStatusService(id, status);

        if (!updatedGift) {
            console.error('Regalo no encontrado con ID:', id); // Log para depuración
            return res.status(404).json({ error: 'Gift not found' });
        }

        console.log('Regalo actualizado:', updatedGift); // Log para depuración
        res.json({ message: 'Gift updated successfully', gift: updatedGift });
    } catch (error) {
        console.error('Error actualizando el estado del regalo:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getGifts,
    postGifts,
    updateGiftStatus
};
