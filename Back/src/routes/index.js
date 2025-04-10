const express = require('express');
const { getGifts, postGifts, updateGiftStatus } = require('../controllers/index');
const { fetchGiftByName } = require('../middlewares/fetchgiftbyname');

const router = express.Router();

// Ruta para obtener todos los regalos
router.get('/GiftList', getGifts);

// Ruta para crear un nuevo regalo
router.post('/GiftList', postGifts);

// Ruta para actualizar el estado de un regalo por su nombre
router.put('/GiftList/:gift', fetchGiftByName, updateGiftStatus);

module.exports = router;