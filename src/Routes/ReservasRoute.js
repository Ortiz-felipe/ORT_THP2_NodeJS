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

reservasRoute.post('/:id/confirmacion', (req, res) => {
    try {
        const reserva = moduloReserva.confirmar(Number(req.params.id))
        res.json(reserva).send()
    } catch (error) {
        if (error.status) {
            res.status(error.status).json(error).send()
        } else {
            res.status(500).send()
        }
    }
})

reservasRoute.get('/:id', (req, res) => {
    try {
        const reserva = moduloReserva.obtenerPorId(req.params.id)
        res.json(reserva).send()
    } catch (error) {
        res.json(error).send()
    }

})

reservasRoute.delete('/:id', (req, res) => {
    try {
        const reserva = moduloReserva.obtenerPorId(req.params.id)
        moduloReserva.eliminarReserva(reserva)
        res.status(204).send()
    } catch (errror) {
        res.status(404)
    }
})

export default reservasRoute