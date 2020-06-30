class Cancha {
  constructor(nombre, precio, capacidad, estaHabilitada = true, id = null) {
    this.id = id;
    this.nombre = nombre;
    this.precio = Number(precio);
    this.capacidad = Number(capacidad);
    this.estaHabilitada = estaHabilitada;
  }
}

export default Cancha;
