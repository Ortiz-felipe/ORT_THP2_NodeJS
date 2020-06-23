import express from 'express';
import ModuloReservasFactory from '../ModuloReservas/ModuloReservasFactory.js';
import Reserva from '../models/Reserva.js';

let moduloReserva;

ModuloReservasFactory.create().then((moduloReservaCreado) => {
  moduloReserva = moduloReservaCreado;
});

const transformarBodyAReserva = (body) => new Reserva(
  body.nombre, body.email, body.fecha, body.dni, body.canchaId,
);

const reservasRoute = express.Router();

reservasRoute.post('/', async (req, res, next) => {
  const { body } = req;
  try {
    const reservaCreada = await moduloReserva.crear(transformarBodyAReserva(body));
    res.status(201).json(reservaCreada).send();
  } catch (error) {
    next(error);
  }
});

reservasRoute.get('/', (req, res) => {
  const reservas = moduloReserva.obtenerTodas();
  res.json(reservas).send();
});

reservasRoute.post('/:id/confirmacion', (req, res, next) => {
  try {
    const reserva = moduloReserva.confirmar(Number(req.params.id));
    res.json(reserva).send();
  } catch (error) {
    next(error);
  }
});

reservasRoute.get('/:id', (req, res, next) => {
  try {
    const reserva = moduloReserva.obtenerPorId(req.params.id);
    res.json(reserva).send();
  } catch (error) {
    next(error);
  }
});

reservasRoute.delete('/:id', (req, res, next) => {
  try {
    const reserva = moduloReserva.obtenerPorId(req.params.id);
    moduloReserva.eliminarReserva(reserva);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

export default reservasRoute;
