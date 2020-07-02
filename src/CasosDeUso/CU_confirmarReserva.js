import Email from '../models/email.js';

class CU_confirmarReserva {
  constructor(reservasRepository, mailService) {
    this.reservasRepository = reservasRepository;
    this.mailService = mailService;
  }

  async run(id) {
    try {
      const reservaEncontrada = await this.reservasRepository.obtenerPorId(id);
      if (reservaEncontrada) {
        reservaEncontrada.estadoReserva = true;
        await this.reservasRepository.actualizar(id, reservaEncontrada);
        const cuerpoMensaje = `Hola ${reservaEncontrada.nombre}. Se ha confirmado tu reserva para el dia ${reservaEncontrada.fecha}`;
        const email = new Email(reservaEncontrada.Email, 'Confirmacion de Reserva', cuerpoMensaje);
        this.mailService.send(email);
      } else {
        throw Error({ name: 'repositoryError', message: 'Id no encontrado' });
      }
    } catch (error) {
      if (error.name === 'repositoryError') {
        throw {
          error: 'Id no encontrado',
          status: 404,
        };
      } else {
        throw {
          error: error.name,
          message: error.message,
        };
      }
    }
  }
}

export default CU_confirmarReserva;
