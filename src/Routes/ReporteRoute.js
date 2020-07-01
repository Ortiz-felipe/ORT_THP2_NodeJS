import express from 'express';
import getReportesApi from '../apis/reportesAPI.js';

function getReportesRouter() {
  const router = express.Router();

  const reportesAPI = getReportesApi();
  /**
 * @api {get} generarReporte/mensual Generara un reporte con las ganancias del mes
 *
 * @apiVersion 0.1.0
 * @apiName Mensual
 * @apiGroup GenerarReporte
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 * @apiErrorExample {json} ConvertionError
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *      "error": "Error al convertir el monto solicitado"
 *    }
 * @apiErrorExample {json} CurrencyNotNegative
 *    HTTP/1.1 400 Bad Request
 *    {
 *      "error": "El monto a convertir no puede ser negativo"
 *    }
 */
  router.get('/mensual', async (req, res) => {
    try {
      const respuesta = await reportesAPI.generarReporteMensual();
      res.status(201).json({ res: respuesta });
    } catch (err) {
      res.status(400).json(err);
    }
  });

  return router;
}
export default getReportesRouter;
