const Gift = require('../models/Gift');

const fetchGiftByName = async (req, res, next) => {
    try {
        const { gift } = req.params; // Obtén el nombre del regalo desde los parámetros
        console.log('Buscando regalo con nombre:', gift); // Log para depuración
        console.log('Parámetro recibido en la ruta:', req.params.gift);
        const foundGift = await Gift.findOne({ gift: { $regex: `^${gift}$`, $options: 'i' } }); // Búsqueda insensible a mayúsculas

        if (!foundGift) {
            console.error('Regalo no encontrado:', gift); // Log para depuración
            return res.status(404).json({ error: 'Gift not found' });
        }

        console.log('Regalo encontrado:', foundGift); // Log para depuración
        req.giftId = foundGift._id; // Agrega el ID del regalo al objeto req
        next(); // Pasa al siguiente middleware o controlador
    } catch (error) {
        console.error('Error buscando el regalo por nombre:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { fetchGiftByName };