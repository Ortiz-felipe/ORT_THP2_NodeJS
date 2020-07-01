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

/**
 * @api {get} reservas/ Devuelve todas las reservas
 * @apiVersion 0.1.0
 * @apiName ObtenerTodas
 * @apiGroup Reservas
 *
 *
 * @apiSuccess {Number} id  Identificador unico de la reserva.
 * @apiSuccess {String} nombre  Nombre quien hizo la reserva.
 * @apiSuccess {String} email  Email de la persona que hizo la reserva.
 * @apiSuccess {Date} fecha Fecha en la cual se hizo la reserva.
 * @apiSuccess {String} dni Documento de la persona que hizo la reserva.
 * @apiSuccess {Number} canchaId Identificador de la cancha reservada.
 * @apiSuccess {Boolean} estadoReserva Denota si la reserva fue confirmada.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *        {
 *          "id": "1",
 *          "nombre": "Pele",
 *          "email": "subject@mail.com",
 *          "fecha": "2020/12/12",
 *          "dni": "99888777",
 *          "canchaId": "1",
 *          "estadoReserva": "true",
 *        }
 *    ]
 *
 */
reservasRoute.get('/', async (req, res) => {
  const reservas = await moduloReserva.obtenerTodas();
  res.json(reservas).send();
});

/**
 * @api {get} reservas/:id Devuelve una cancha
 * @apiVersion 0.1.0
 * @apiName ObtenerPorId
 * @apiGroup Reservas
 *
 * @apiParam {Number} id Identificador de la reserva
 *
 * @apiSuccess {Number} id  Identificador unico de la reserva.
 * @apiSuccess {String} nombre  Nombre quien hizo la reserva.
 * @apiSuccess {String} email  Email de la persona que hizo la reserva.
 * @apiSuccess {Date} fecha Fecha en la cual se hizo la reserva.
 * @apiSuccess {String} dni Documento de la persona que hizo la reserva.
 * @apiSuccess {Number} canchaId Identificador de la cancha reservada.
 * @apiSuccess {Boolean} estadoReserva Denota si la reserva fue confirmada.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *        {
 *          "id": "1",
 *          "nombre": "Pele",
 *          "email": "subject@mail.com",
 *          "fecha": "2020/12/12",
 *          "dni": "99888777",
 *          "canchaId": "1",
 *          "estadoReserva": "true",
 *        }
 *    ]
 *
 * @apiError CanchaNoEncontrada Id de cancha no encontrado
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 404 Not Found
 *    {
 *      "error": "Id de reserva no encontrado"
 *    }
 */
reservasRoute.get('/:id', async (req, res, next) => {
  try {
    const reserva = await moduloReserva.obtenerPorId(Number(req.params.id));
    res.json(reserva).send();
  } catch (error) {
    next(error);
  }
});

/**
 * @api {post} reservas/ Crea una reserva
 * @apiVersion 0.1.0
 * @apiName Crear
 * @apiGroup Reservas
 *
 * @apiParam {Object} reserva Contiene la informacion necesaria para dar de alta una reserva
 * @apiParamExample {json} Request-Example:
 *
 *        {
 *          "nombre": "Pele",
 *          "email": "subject@mail.com",
 *          "fecha": "2020/12/12",
 *          "dni": "99888777",
 *          "canchaId": "1"
 *        }
 *
 *
 * @apiSuccess {String} nombre  Nombre quien hizo la reserva.
 * @apiSuccess {String} email  Email de la persona que hizo la reserva.
 * @apiSuccess {Date} fecha Fecha en la cual se hizo la reserva.
 * @apiSuccess {String} dni Documento de la persona que hizo la reserva.
 * @apiSuccess {Number} canchaId Identificador de la cancha reservada.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *     [
 *        {
 *          "id": "1",
 *          "nombre": "Pele",
 *          "email": "subject@mail.com",
 *          "fecha": "2020/12/12",
 *          "dni": "99888777",
 *          "canchaId": "1",
 *          "estadoReserva": "false",
 *        }
 *    ]
 *
 */
reservasRoute.post('/', async (req, res, next) => {
  const { body } = req;
  try {
    const reservaCreada = await moduloReserva.crear(transformarBodyAReserva(body));
    res.status(201).json(reservaCreada).send();
  } catch (error) {
    next(error);
  }
});

/**
 * @api {post} reservas/:id/confirmacion Confirma una reserva
 * @apiVersion 0.1.0
 * @apiName Confirmar
 * @apiGroup Reservas
 *
 * @apiParam {Number} id Identificador numerico de la reserva a confirmar
 *
 * @apiSuccess {String} nombre  Nombre quien hizo la reserva.
 * @apiSuccess {String} email  Email de la persona que hizo la reserva.
 * @apiSuccess {Date} fecha Fecha en la cual se hizo la reserva.
 * @apiSuccess {String} dni Documento de la persona que hizo la reserva.
 * @apiSuccess {Number} canchaId Identificador de la cancha reservada.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 204 No Content
 *     [
 *     ]
 *
 */
reservasRoute.post('/:id/confirmacion', async (req, res, next) => {
  try {
    const reserva = await moduloReserva.confirmar(Number(req.params.id));
    res.json(reserva).send();
  } catch (error) {
    next(error);
  }
});

/**
 * @api {delete} reservas/:id Elimina una reserva
 * @apiVersion 0.1.0
 * @apiName Eliminar
 * @apiGroup Reservas
 *
 * @apiParam {Number} id Elimina la reserva a la que corresponda dicho id
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 204 No Content
 *
 * @apiError ReservaNoEncontrada Id de reserva no encontrado
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 404 Not Found
 *    {
 *      "error": "Id de reserva no encontrado"
 *    }
 */
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
