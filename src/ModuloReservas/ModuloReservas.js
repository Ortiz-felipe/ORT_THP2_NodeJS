import Joi from '@hapi/joi';
import moment from 'moment';

const reservas = [];
let id = 1;
class ModuloReservas {
  constructor(moduloFeriados, moduloCanchas) {
    this.moduloFeriados = moduloFeriados;
    this.moduloCanchas = moduloCanchas;
  }

  async crear(reserva) {
    await this.validar(reserva);
    reserva.id = id;
    reserva.estaConfirmada = false;
    this.moduloCanchas.obtenerPorId(reserva.canchaId);
    reservas.push(reserva);
    id++;
    return reserva;
  }

  async validar(reserva) {
    const schema = Joi.object({
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

    });
    await schema.validateAsync(reserva);
    if (moment(reserva.fecha).isBefore(moment())) {
      throw {
        error: 'La fecha es anterior al dia de hoy',
      };
    }
    const esFeriado = this.moduloFeriados.esFeriado(reserva.fecha);

    if (esFeriado) {
      throw {
        error: 'El dia es un feriado',
      };
    }
  }

  confirmar(reservaId) {
    const reservaEncontrada = this.obtenerPorId(reservaId);
    reservaEncontrada.estaConfirmada = true;
  }

  obtenerPorId(reservaId) {
    const reservaEncontrada = reservas.find((reserva) => reservaId === reserva.id);
    if (reservaEncontrada) {
      return reservaEncontrada;
    }
    throw {
      error: 'Id no encontrado',
      status: 404,
    };
  }

  eliminarReserva(reservaId) {
    const index = reservas.findIndex((reserva) => reservaId === reserva.id);
    if (index === -1) {
      throw {
        error: 'id no encontrado',
        status: 404,
      };
    }
    reservas.splice(index, 1);
  }

  obtenerTodas() {
    return reservas;
  }
}

export default ModuloReservas;
