const { fetchGifts, updateGiftStatus } = require('./fetchGifts'); // Importa la función para obtener la lista de regalos y actualizar el estado

const renderGiftList = async () => {
    try {
        const gifts = await fetchGifts(); // Obtén la lista de regalos desde la API
        console.log('Datos obtenidos desde la API:', gifts); // <-- Agrega este log
        const container = document.getElementById('gift-list');
        container.innerHTML = ''; // Limpia la lista existente

        gifts.forEach(gift => {
            const giftItem = document.createElement('li');
            giftItem.className = 'gift-item';
            giftItem.innerHTML = `
                <h3>${gift.gift}</h3>
                <button 
                    class="status-button ${gift.status}" 
                    ${gift.status !== 'disponible' ? 'disabled' : ''}
                >
                    ${gift.status === 'regalado' ? 'Regalado' : 'Regalar'}
                </button>
            `;

            const button = giftItem.querySelector('button');
            button.addEventListener('click', async () => {
                if (gift.status === 'regalado') {
                    alert('Este regalo ya ha sido marcado como regalado.');
                    return;
                }

                // Mostrar el pop-up de confirmación
                const confirmAction = window.confirm(`¿Quieres confirmar "${gift.gift}" como regalado?`);
                if (!confirmAction) {
                    // Si el usuario cancela, no se realiza la solicitud
                    return;
                }

                try {
                    // Actualiza el estado del regalo en el backend
                    await updateGiftStatus(gift.gift, 'regalado');
                    
                    // Refresca la página para mostrar los cambios
                    window.location.reload();
                } catch (error) {
                    console.error('Error al actualizar el regalo:', error);
                }
            });

            container.appendChild(giftItem);
        });
    } catch (error) {
        console.error('Error rendering gift list:', error);
    }
};

module.exports = renderGiftList;