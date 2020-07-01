class Reserva {
  constructor(nombre, email, fecha, dni, canchaId, estadoReserva = false, id = null) {
    this.id = Number(id);
    this.nombre = nombre;
    this.email = email;
    this.fecha = fecha;
    this.dni = dni;
    this.canchaId = Number(canchaId);
    this.estadoReserva = estadoReserva;
  }
}

export default Reserva;
