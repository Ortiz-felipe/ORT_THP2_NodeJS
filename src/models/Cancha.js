class Cancha {
  constructor(nombre, precio, capacidad, estaHabilitada = true) {
    this.nombre = nombre;
    this.precio = precio;
    this.capacidad = capacidad;
    this.estaHabilitada = estaHabilitada;
  }
}

export default Cancha;
