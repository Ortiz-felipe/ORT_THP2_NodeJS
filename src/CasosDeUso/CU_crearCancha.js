import Joi from '@hapi/joi';

class CU_crearCancha {
  constructor(canchaRepository) {
    this.canchaRepository = canchaRepository;
  }

  async validar(cancha) {
    const schema = Joi.object({
      nombre: Joi.string()
        .required(),
      precio: Joi.number()
        .required()
        .min(50),
      capacidad: Joi.number()
        .required()
        .min(1)
        .max(20),
    });
    try {
      await schema.validateAsync(cancha);
    } catch (error) {
      throw {
        status: 400,
        error,
      };
    }
  }

  async run(cancha) {
    await this.validar(cancha);
    cancha.estaHabilitada = true;
    this.canchaRepository.guardar(cancha);
    return cancha;
  }
}

export default CU_crearCancha;
