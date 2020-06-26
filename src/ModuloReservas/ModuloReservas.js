import Joi from '@hapi/joi';
import moment from 'moment';
class ModuloReservas {
  constructor(moduloFeriados, moduloCanchas, reservasRepository) {
    this.moduloFeriados = moduloFeriados;
    this.moduloCanchas = moduloCanchas;
    this.reservasRepository = reservasRepository;
  }

  async crear(reserva) {
    await this.validar(reserva);
    // reserva.id = id;
    // reserva.estaConfirmada = false;
    this.moduloCanchas.obtenerPorId(reserva.canchaId);
    this.reservasRepository.guardar(reserva);
    // reservas.push(reserva);
    // id++;
    return reserva;
  }

  async validar(reserva) {
    const schema = this.JoiValidationObject();
    try {
      await schema.validateAsync(reserva);
    } catch (error) {
      throw {
        status: 400,
        error,
      };
    }
    if (moment(reserva.fecha).isBefore(moment())) {
      throw {
        status: 400,
        error: 'La fecha es anterior al dia de hoy',
      };
    }
    const esFeriado = this.moduloFeriados.esFeriado(reserva.fecha);

    if (esFeriado) {
      throw {
        status: 400,
        error: 'El dia es un feriado',
      };
    }
  }

  JoiValidationObject() {
    return Joi.object({
      nombre: Joi.string()
        .required(),

      email: Joi.string()
        .email()
        .required(),
      fecha: Joi.date()
        .required(),
      dni: Joi.string()
        .required()
        .min(7)
        .max(8),
      canchaId: Joi.number()
        .required(),
      estadoReserva: Joi.bool()
    });
  }

  confirmar(reservaId) {
    const reservaEncontrada = this.reservasRepository.obtenerPorId(reservaId);
    if (reservaEncontrada) {
      reservaEncontrada.estadoReserva = true;
    } else {
      throw {
        error: 'Id no encontrado',
        status: 404,
      };
    }
  }

  obtenerPorId(reservaId) {
    const reservaEncontrada = this.reservasRepository.obtenerPorId(reservaId);
    if (reservaEncontrada) {
      return reservaEncontrada;
    }
    throw {
      error: 'Id no encontrado',
      status: 404,
    };
  }

  eliminarReserva(reservaId) {
    this.reservasRepository.eliminarReserva(reservaId);
  }

  obtenerTodas() {
    return this.reservasRepository.obtenerTodas();
  }
}

export default ModuloReservas;
