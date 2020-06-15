import express from 'express'
import ModuloReservasFactory from '../ModuloReservas/ModuloReservasFactory.js'


let moduloReserva
ModuloReservasFactory.create().then((moduloReservaCreado) => {
    moduloReserva = moduloReservaCreado
})
const reservasRoute = express.Router()

reservasRoute.post('/', async (req, res) => {
    const body = req.body
    try {
        const reservaCreada = await moduloReserva.crear(body)
        res.status(201).json(reservaCreada).send()
    } catch (error) {
        res.status(400).json(error).send()
    }
})

reservasRoute.get('/', (req, res) => {
    const reservas = moduloReserva.obtenerTodas()
    res.json(reservas).send()
})

export default reservasRoute