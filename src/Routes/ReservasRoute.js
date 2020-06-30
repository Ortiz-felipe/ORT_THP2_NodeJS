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

reservasRoute.get('/', async (req, res) => {
  const reservas = await moduloReserva.obtenerTodas();
  res.json(reservas).send();
});

reservasRoute.post('/:id/confirmacion', async (req, res, next) => {
  try {
    const reserva = await moduloReserva.confirmar(Number(req.params.id));
    res.json(reserva).send();
  } catch (error) {
    next(error);
  }
});

reservasRoute.get('/:id', async (req, res, next) => {
  try {
    const reserva = await moduloReserva.obtenerPorId(req.params.id);
    res.json(reserva).send();
  } catch (error) {
    next(error);
  }
});

reservasRoute.delete('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    await moduloReserva.obtenerPorId(id);
    await moduloReserva.eliminarReserva(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

export default reservasRoute;
