import ModuloReservas from './ModuloReservas.js'
import ModuloFeriadosFactory from '../ModuloFeriados/ModuloFeriadoFactory.js'

class ModuloReservasFactory {
    static async create() {
        const moduloFeriado = await ModuloFeriadosFactory.create()
        return new ModuloReservas(moduloFeriado)
    }
}

export default ModuloReservasFactory