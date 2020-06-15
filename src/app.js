import express from 'express'
import reservasRoute from './Routes/ReservasRoute.js'

const app = express()
app.use(express.json())
app.use('/reservas', reservasRoute)

export default app