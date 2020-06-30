import express from 'express';
import ModuloCanchasFactory from '../ModuloCanchas/ModuloCanchasFactory.js';
import Cancha from '../models/Cancha.js';

const moduloCanchas = ModuloCanchasFactory.create();
const canchasRoute = express.Router();

const transformarBodyACancha = (body) => new Cancha(body.nombre, body.precio, body.capacidad);

/**
 * @api {get} canchas/ Devuelve todas las canchas
 * @apiName ObtenerTodas
 * @apiGroup Canchas
 *
 *
 * @apiSuccess {Object} canchas Contiene todas las canchas.
 * @apiSuccess {Number} id  Identificador unico de la cancha.
 * @apiSuccess {String} nombre  Nombre de la cancha.
 * @apiSuccess {String} precio  Precio de alquier de la cancha.
 * @apiSuccess {Number} capacidad Capacidad de jugadores de la cancha.
 * @apiSuccess {Boolean} estaHabilitada Si la cancha esta en condiciones para ser alquilada.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *        {
 *          "id": "1",
 *          "nombre": "Pele",
 *          "precio": "50",
 *          "capacidad": "1",
 *          "estaHabilitada": "true",
 *        }
 *    ]
 *
 */
canchasRoute.get('/', async (req, res) => {
  const canchas = await moduloCanchas.obtenerTodas();
  res.json(canchas).send();
});

/**
 * @api {get} canchas/:id Devuelve una cancha
 * @apiName ObtenerPorId
 * @apiGroup Canchas
 *
 * @apiParam {Number} id Identificador de la cancha
 *
 * @apiSuccess {Object} canchas Contiene todas las canchas.
 * @apiSuccess {Number} id  Identificador unico de la cancha.
 * @apiSuccess {String} nombre  Nombre de la cancha.
 * @apiSuccess {String} precio  Precio de alquier de la cancha.
 * @apiSuccess {Number} capacidad Capacidad de jugadores de la cancha.
 * @apiSuccess {Boolean} estaHabilitada Si la cancha esta en condiciones para ser alquilada.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *        {
 *          "id": "1",
 *          "nombre": "Pele",
 *          "precio": "50",
 *          "capacidad": "1",
 *          "estaHabilitada": "true",
 *        }
 *    ]
 *
 */
canchasRoute.get('/:id', async (req, res, next) => {
  try {
    const cancha = await moduloCanchas.obtenerPorId(Number(req.params.id));
    res.json(cancha).send();
  } catch (error) {
    next(error);
  }
});

/**
 * @api {post} canchas/ Crea una cancha
 * @apiName Crear
 * @apiGroup Canchas
 *
 * @apiSuccess {Object} canchas Contiene todas las canchas.
 * @apiSuccess {Number} id  Identificador unico de la cancha.
 * @apiSuccess {String} nombre  Nombre de la cancha.
 * @apiSuccess {String} precio  Precio de alquier de la cancha.
 * @apiSuccess {Number} capacidad Capacidad de jugadores de la cancha.
 * @apiSuccess {Boolean} estaHabilitada Si la cancha esta en condiciones para ser alquilada.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *        {
 *          "id": "1",
 *          "nombre": "Pele",
 *          "precio": "50",
 *          "capacidad": "1",
 *          "estaHabilitada": "true",
 *        }
 *    ]
 *
 */
canchasRoute.post('/', async (req, res, next) => {
  const { body } = req;
  try {
    const canchaCreada = await moduloCanchas.crear(transformarBodyACancha(body));
    res.status(201).json(canchaCreada).send();
  } catch (error) {
    next(error);
  }
});

canchasRoute.delete('/:id', async (req, res, next) => {
  try {
    await moduloCanchas.eliminarCancha(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

export default canchasRoute;
