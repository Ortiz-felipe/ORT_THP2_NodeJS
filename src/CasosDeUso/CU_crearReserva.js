import moment from 'moment';
import Joi from '@hapi/joi';

class CU_crearReserva {
  constructor(moduloFeriados, moduloCanchas, reservasRepository) {
    this.moduloFeriados = moduloFeriados;
    this.moduloCanchas = moduloCanchas;
    this.reservasRepository = reservasRepository;
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
      id: Joi.number().allow(null),
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
      estadoReserva: Joi.bool(),
    });
  }

  async run(reserva) {
    await this.validar(reserva);
    await this.moduloCanchas.obtenerPorId(reserva.canchaId);
    return this.reservasRepository.guardar(reserva);
  }
}

export default CU_crearReserva;
