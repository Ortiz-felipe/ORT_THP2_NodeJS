import express from 'express';
import getReportesApi from '../apis/reportesAPI.js';

function getReportesRouter() {
  const router = express.Router();

  const reportesAPI = getReportesApi();

  router.get('/', async (req, res) => {
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
