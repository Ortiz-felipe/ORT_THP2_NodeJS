import Joi from '@hapi/joi';

const canchas = [];
let id = 1;

class ModuloCanchas {
  async crear(cancha) {
    await this.validar(cancha);
    cancha.id = id;
    cancha.estaHabilitada = true;
    canchas.push(cancha);
    id++;
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
    await schema.validateAsync(cancha);
  }

  obtenerTodas() {
    return canchas;
  }

  obtenerPorId(canchaId) {
    const canchaEncontrada = canchas.find((cancha) => canchaId === cancha.id);
    if (canchaEncontrada) {
      return canchaEncontrada;
    }
    throw {
      error: 'Id de cancha no encontrado',
      status: 404,
    };
  }

  eliminarCancha(canchaId) {
    const index = canchas.findIndex((cancha) => canchaId === cancha.id);
    if (index === -1) {
      throw {
        error: 'id no encontrado',
        status: 404,
      };
    }
    canchas.splice(index, 1);
  }
}
export default ModuloCanchas;
