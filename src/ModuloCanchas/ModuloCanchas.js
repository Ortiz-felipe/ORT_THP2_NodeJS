import Joi from '@hapi/joi';

class ModuloCanchas {
  constructor(canchaRepository) {
    this.canchaRepository = canchaRepository;
  }

  async crear(cancha) {
    await this.validar(cancha);
    cancha.estaHabilitada = true;
    this.canchaRepository.guardar(cancha);
    return cancha;
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

  obtenerTodas() {
    return this.canchaRepository.obtenerTodas();
  }

  obtenerPorId(canchaId) {
    const canchaEncontrada = this.canchaRepository.obtenerPorId(canchaId);
    if (canchaEncontrada) {
      return canchaEncontrada;
    }
    throw {
      error: 'Id de cancha no encontrado',
      status: 404,
    };
  }

  eliminarCancha(canchaId) {
    this.canchaRepository.eliminarCancha(canchaId);
  }
}
export default ModuloCanchas;
