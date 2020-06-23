import express from 'express';
import ModuloCanchasFactory from '../ModuloCanchas/ModuloCanchasFactory.js';
import Cancha from '../models/Cancha.js';

const moduloCanchas = ModuloCanchasFactory.create();
const canchasRoute = express.Router();

const transformarBodyACancha = (body) => new Cancha(body.nombre, body.precio, body.capacidad);

canchasRoute.post('/', async (req, res, next) => {
  const { body } = req;
  try {
    const canchaCreada = await moduloCanchas.crear(transformarBodyACancha(body));
    res.status(201).json(canchaCreada).send();
  } catch (error) {
    next(error);
  }
});

canchasRoute.get('/', (req, res) => {
  const canchas = moduloCanchas.obtenerTodas();
  res.json(canchas).send();
});

canchasRoute.get('/:id', (req, res, next) => {
  try {
    const cancha = moduloCanchas.obtenerPorId(req.params.id);
    res.json(cancha).send();
  } catch (error) {
    next(error);
  }
});

canchasRoute.delete('/:id', (req, res, next) => {
  try {
    moduloCanchas.eliminarCancha(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

export default canchasRoute;
