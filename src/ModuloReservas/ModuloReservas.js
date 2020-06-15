import Joi from '@hapi/joi'
import ModuloFeriadosFactory from '../ModuloFeriados/ModuloFeriadoFactory.js'


const reservas = []
class ModuloReservas {

    constructor(moduloFeriados) {
        this.moduloFeriados = moduloFeriados
    }

    async crear(reservaParam) {
        await this.validar(reservaParam)
        reservas.push(reservaParam)
        return reservaParam

    }

    async validar(reservaParam) {
        const schema = Joi.object({
            nombre: Joi.string()
                .required(),

            email: Joi.string()
                .email()
                .required(),
            fecha: Joi.date()
                .required(),
            dni: Joi.string()
                .required()
                .min(7)
                .max(8)

        })
        await schema.validateAsync(reservaParam);
        const esFeriado = this.moduloFeriados.esFeriado(reservaParam.fecha)
        console.log(esFeriado)

        if (esFeriado) {
            throw {
                error: 'el dia es un feriado'
            }
        }


    }

    obtenerTodas() {
        return reservas
    }

}

export default ModuloReservas