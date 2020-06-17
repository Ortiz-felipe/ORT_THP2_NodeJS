import express from 'express'
import ModuloCanchasFactory from '../ModuloCanchas/ModuloCanchasFactory.js'

const moduloCanchas = ModuloCanchasFactory.create()
const canchasRoute = express.Router()

canchasRoute.post('/', async (req, res) => {
    const body = req.body
    const canchaCreada = await moduloCanchas.crear(body)
    res.status(201).json(canchaCreada).send()
})

export default canchasRoute