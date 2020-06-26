class ReservaDaoArray {
    constructor() {
        this.reservas = [];
        this.id = 0;
    }

    guardar(reserva) {
        reserva.id = this.id;
        this.reservas.push(reserva);
        this.id++;
    }    

    obtenerTodas() {
        return this.reservas;
    }

    obtenerPorId(reservaId) {
        return this.reservas.find(reserva => reservaId === reserva.id);
    }

    eliminarReserva(reservaId) {
        const index = this.reservas.findIndex(reserva => reservaId === reserva.id);
        if (index === -1) {
            throw {
                error: 'id no encontrado',
                status: 404,
            };
        }
        this.reservas.splice(index, 1);
    }
};

export default ReservaDaoArray;