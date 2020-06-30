import express from 'express';
import reservasRoute from './Routes/ReservasRoute.js';
import canchasRoute from './Routes/CanchasRoute.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import getReportesRouter from './Routes/ReporteRoute.js';

const app = express();
app.use(express.json());
app.use('/reservas', reservasRoute);
app.use('/canchas', canchasRoute);
app.use('/Generarreportes', getReportesRouter());
app.use(errorMiddleware);

export default app;
