class Reserva {
  constructor(nombre, email, fecha, dni, canchaId) {
    this.nombre = nombre;
    this.email = email;
    this.fecha = fecha;
    this.dni = dni;
    this.canchaId = canchaId;
    this.estadoReserva = false;
  }
}

export default Reserva;
