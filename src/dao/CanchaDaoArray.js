class CanchaDaoArray {
  constructor() {
    this.canchas = [];
    this.id = 0;
  }

  guardar(cancha) {
    cancha.dataValues.id = this.id;
    this.canchas.push(cancha);
    this.id++;
    return cancha;
  }

  obtenerTodas() {
    return this.canchas;
  }

  obtenerPorId(canchaId) {
    const cancha = this.canchas.find((c) => c.dataValues.id === canchaId);
    return cancha;
  }

  eliminarCancha(canchaId) {
    const index = this.canchas.findIndex((cancha) => canchaId === cancha.dataValues.id);
    if (index === -1) {
      throw {
        error: 'id no encontrado',
        status: 404,
      };
    }
    this.canchas.splice(index, 1);
  }
}

export default CanchaDaoArray;
