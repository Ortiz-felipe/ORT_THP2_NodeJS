class CanchaDaoArray {
  constructor() {
    this.canchas = [];
    this.id = 0;
  }

  guardar(cancha) {
    cancha.id = this.id;
    this.canchas.push(cancha);
    this.id++;
  }

  obtenerTodas() {
    return this.canchas;
  }

  obtenerPorId(canchaId) {
    return this.canchas.find((cancha) => canchaId === cancha.id);
  }

  eliminarCancha(canchaId) {
    const index = this.canchas.findIndex((cancha) => canchaId === cancha.id);
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
