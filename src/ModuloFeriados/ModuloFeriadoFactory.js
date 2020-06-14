import ModuloFeriados from './ModuloFeriados.js'
import axios from 'axios'
import moment from 'moment'

class ModuloFeriadosFactory {

    static async create() {
        const response = await axios.get("http://nolaborables.com.ar/api/v2/feriados/" + moment().year())
        const feriados = response.data
        return new ModuloFeriados(feriados)
    }
}

export default ModuloFeriadosFactory