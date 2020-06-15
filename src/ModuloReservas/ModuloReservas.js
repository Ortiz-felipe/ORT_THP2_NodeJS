import Joi from '@hapi/joi'
import moment from 'moment'


const reservas = []
let id = 1
class ModuloReservas {

    constructor(moduloFeriados) {
        this.moduloFeriados = moduloFeriados
    }

    async crear(reservaParam) {
        await this.validar(reservaParam)
        reservaParam.id = id
        reservas.push(reservaParam)
        id++
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
        if (moment(reservaParam.fecha).isBefore(moment())) {
            throw {
                error: 'La fecha es anterior al dia de hoy'
            }
        }
        const esFeriado = this.moduloFeriados.esFeriado(reservaParam.fecha)

        if (esFeriado) {
            throw {
                error: 'El dia es un feriado'
            }
        }


    }

    obtenerTodas() {
        return reservas
    }

}

export default ModuloReservas