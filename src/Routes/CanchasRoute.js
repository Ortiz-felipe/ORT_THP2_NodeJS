import express from 'express';
import ModuloCanchasFactory from '../ModuloCanchas/ModuloCanchasFactory.js';
import Cancha from '../models/Cancha.js';

const moduloCanchas = ModuloCanchasFactory.create();
const canchasRoute = express.Router();

const transformarBodyACancha = (body) => new Cancha(body.nombre, body.precio, body.capacidad);

/**
 * @api {get} canchas/ Devuelve todas las canchas
 * @apiVersion 0.1.0
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
 *          "capacidad": "11",
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
 * @apiVersion 0.1.0
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
 *          "capacidad": "11",
 *          "estaHabilitada": "true",
 *        }
 *    ]
 *
 * @apiError CanchaNoEncontrada Id de cancha no encontrado
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 404 Not Found
 *    {
 *      "error": "Id de cancha no encontrado"
 *    }
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
 * @apiVersion 0.1.0
 * @apiName Crear
 * @apiGroup Canchas
 *
 * @apiParam {Object} cancha Contiene la informacion necesaria para dar de alta una cancha
 * @apiParamExample {json} Request-Example:
 *            {
 *              "nombre": "Pele",
 *              "precio": "50",
 *              "capacidad": "11",
 *              "estaHabilitada": "true"
 *            }
 *
 *
 * @apiSuccess {Number} id  Identificador unico de la cancha.
 * @apiSuccess {String} nombre  Nombre de la cancha.
 * @apiSuccess {String} precio  Precio de alquier de la cancha.
 * @apiSuccess {Number} capacidad Capacidad de jugadores de la cancha.
 * @apiSuccess {Boolean} estaHabilitada Si la cancha esta en condiciones para ser alquilada.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
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

/**
 * @api {delete} canchas/:id Elimina una cancha una cancha
 * @apiVersion 0.1.0
 * @apiName Eliminar
 * @apiGroup Canchas
 *
 * @apiParam {Number} id Elimina la cancha a la que corresponda dicho id
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 204 No Content
 *
 * @apiError CanchaNoEncontrada Id de cancha no encontrado
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 404 Not Found
 *    {
 *      "error": "Id de cancha no encontrado"
 *    }
 */
canchasRoute.delete('/:id', async (req, res, next) => {
  try {
    await moduloCanchas.eliminarCancha(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

export default canchasRoute;
