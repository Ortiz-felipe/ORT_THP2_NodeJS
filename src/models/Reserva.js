class Reserva {
  constructor(nombre, email, fecha, dni, canchaId, estadoReserva = false, id = null) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.fecha = fecha;
    this.dni = dni;
    this.canchaId = canchaId;
    this.estadoReserva = estadoReserva;
  }
}

export default Reserva;
