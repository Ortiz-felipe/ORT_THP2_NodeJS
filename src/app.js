import express from 'express';
import dotenv from 'dotenv';
import reservasRoute from './Routes/ReservasRoute.js';
import canchasRoute from './Routes/CanchasRoute.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import getReportesRouter from './Routes/ReporteRoute.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use('/reservas', reservasRoute);
app.use('/canchas', canchasRoute);
app.use(errorMiddleware);
app.use('/Generarreportes', getReportesRouter);

export default app;
