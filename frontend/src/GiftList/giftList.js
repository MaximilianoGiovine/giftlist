const { fetchGifts, updateGiftStatus } = require('./fetchGifts'); // Importa la función para obtener la lista de regalos y actualizar el estado

const renderGiftList = async () => {
    try {
        const gifts = await fetchGifts(); // Obtén la lista de regalos desde la API
        const container = document.getElementById('gift-list');
        container.innerHTML = ''; // Limpia la lista existente

        gifts.forEach(gift => {
            const giftItem = document.createElement('li');
            giftItem.className = 'gift-item';
            giftItem.innerHTML = `
                <h3>${gift.gift}</h3>
                <button 
                    class="status-button ${gift.status}" 
                    ${gift.status === 'regalado' ? 'disabled' : ''}
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

                try {
                    const updatedGift = await updateGiftStatus(gift.gift, 'regalado'); // Actualiza el estado del regalo
                    gift.status = 'regalado'; // Actualiza el estado localmente
                    button.textContent = 'Regalado';
                    button.classList.add('regalado');
                    button.disabled = true;
                    console.log('Regalo actualizado:', updatedGift);
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

module.exports =  renderGiftList ;