import express from 'express'
import reservasRoute from './Routes/ReservasRoute.js'
import canchasRoute from './Routes/CanchasRoute.js'
import dotenv from 'dotenv';

dotenv.config();
const app = express()
app.use(express.json())
app.use('/reservas', reservasRoute)
app.use('/canchas', canchasRoute)


export default app