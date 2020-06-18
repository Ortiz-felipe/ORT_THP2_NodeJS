import ModuloReservas from './ModuloReservas.js'
import ModuloFeriadosFactory from '../ModuloFeriados/ModuloFeriadoFactory.js'
import ModuloCanchasFactory from '../ModuloCanchas/ModuloCanchasFactory.js'

class ModuloReservasFactory {
    static async create() {
        const moduloFeriado = await ModuloFeriadosFactory.create()
        const moduloCanchas = ModuloCanchasFactory.create()

        return new ModuloReservas(moduloFeriado, moduloCanchas)

    }
}

export default ModuloReservasFactory