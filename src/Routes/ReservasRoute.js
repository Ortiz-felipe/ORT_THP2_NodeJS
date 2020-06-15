import express from 'express'
import ModuloReservas from '../ModuloReservas/ModuloReservas.js'

const reservasRoute = express.Router()
const moduloReserva = new ModuloReservas()

reservasRoute.post('/', async (req, res) => {
    const body = req.body
    try {
        await moduloReserva.crear(body)
        res.status(201).send()
    } catch (error) {
        res.status(400).json(error).send()
    }



})

reservasRoute.get('/', (req, res) => {
    const reservas = moduloReserva.obtenerTodas()
    res.json(reservas).send()
})

export default reservasRoute