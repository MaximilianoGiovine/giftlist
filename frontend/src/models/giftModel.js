class Gift {
    constructor(gift, status) {
        this.gift = gift; // Nombre o descripción del regalo
        this.status = status; // Estado del regalo (e.g., "regalado", "pendiente")
    }

    static fromApiResponse(data) {
        // Valida y transforma los datos de la API
        return new Gift(data.gift, data.status);
    }
}

module.exports = Gift;