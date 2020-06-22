import express from 'express';
import ModuloCanchasFactory from '../ModuloCanchas/ModuloCanchasFactory.js';
import Cancha from '../models/Cancha.js';

const moduloCanchas = ModuloCanchasFactory.create();
const canchasRoute = express.Router();

const transformarBodyACancha = (body) => new Cancha(body.nombre, body.precio, body.capacidad);

canchasRoute.post('/', async (req, res) => {
  const { body } = req;
  const canchaCreada = await moduloCanchas.crear(transformarBodyACancha(body));
  res.status(201).json(canchaCreada).send();
});

canchasRoute.get('/', (req, res) => {
  const canchas = moduloCanchas.obtenerTodas();
  res.json(canchas).send();
});

canchasRoute.get('/:id', (req, res) => {
  try {
    const cancha = moduloCanchas.obtenerPorId(req.params.id);
    res.json(cancha).send();
  } catch (error) {
    res.json(error).send();
  }
});

canchasRoute.delete('/:id', (req, res) => {
  try {
    moduloCanchas.eliminarCancha(req.params.id);
    res.status(204).send();
  } catch (errror) {
    res.status(404);
  }
});

export default canchasRoute;
