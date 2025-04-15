document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("add-gift-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que la página se recargue automáticamente

        const giftInput = document.getElementById("new-gift");
        const giftName = giftInput.value.trim();

        if (giftName) {
            // Realizar la solicitud HTTP POST
            fetch("https://giftlist-back.onrender.com/GiftList", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    gift: giftName,
                    status: "disponible" // Estado inicial del regalo
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    console.error("Error al agregar el regalo:", data.error);
                } else {
                    console.log("Nuevo regalo agregado:", data);

                    // Limpia el campo de entrada
                    giftInput.value = "";

                    // Muestra un mensaje de éxito
                    alert("Regalo agregado exitosamente!");

                    // Recarga la página para mostrar los cambios
                    window.location.reload();
                }
            })
            .catch(error => console.error("Error al realizar la solicitud POST:", error));
        } else {
            alert("Por favor, ingresa un nombre para el regalo.");
        }
    });
});