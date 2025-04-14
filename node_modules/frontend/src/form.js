document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("add-gift-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que la página se recargue

        const giftInput = document.getElementById("new-gift");
        const giftName = giftInput.value.trim();

        if (giftName) {
            // Realizar la solicitud HTTP POST
            fetch("https://giftlist-back.onrender.com/", {
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

                    // Opcional: Actualizar la interfaz o limpiar el formulario
                    giftInput.value = ""; // Limpiar el campo de entrada
                    alert("Regalo agregado exitosamente!");
                }
            })
            .catch(error => console.error("Error al realizar la solicitud POST:", error));
        } else {
            alert("Por favor, ingresa un nombre para el regalo.");
        }
    });
});