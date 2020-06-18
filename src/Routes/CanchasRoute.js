import express from 'express'
import ModuloCanchasFactory from '../ModuloCanchas/ModuloCanchasFactory.js'

const moduloCanchas = ModuloCanchasFactory.create()
const canchasRoute = express.Router()

canchasRoute.post('/', async (req, res) => {
    const body = req.body
    const canchaCreada = await moduloCanchas.crear(body)
    res.status(201).json(canchaCreada).send()
})

canchasRoute.get('/', (req, res) => {
    const canchas = moduloCanchas.obtenerTodas()
    res.json(canchas).send()
})

canchasRoute.get('/:id', (req, res) => {
    try {
        const cancha = moduloCanchas.obtenerPorId(req.params.id)
        res.json(cancha).send()
    } catch (error) {
        res.json(error).send()
    }

})

canchasRoute.delete('/:id', (req, res) => {
    try {
        const cancha = moduloCancha.obtenerPorId(req.params.id)
        moduloCancha.eliminarCancha(reserva)
        res.status(204).send()
    } catch (errror) {
        res.status(404)
    }
})



export default canchasRoute