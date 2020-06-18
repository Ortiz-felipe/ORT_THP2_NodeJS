import Joi from '@hapi/joi'
import moment from 'moment'



const reservas = []
let id = 1
class ModuloReservas {

    constructor(moduloFeriados, moduloCanchas) {
        this.moduloFeriados = moduloFeriados
        this.moduloCanchas = moduloCanchas
    }

    async crear(reservaParam) {
        await this.validar(reservaParam)
        reservaParam.id = id
        reservaParam.estaConfirmada = false
        this.moduloCanchas.obtenerPorId(reservaParam.canchaId)
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
                .max(8),
            canchaId: Joi.number()
                .required()

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

    confirmar(reservaId) {
        const reservaEncontrada = this.obtenerPorId(reservaId)
        reservaEncontrada.estaConfirmada = true
    }

    obtenerPorId(reservaId) {
        const reservaEncontrada = reservas.find((reserva) => reservaId === reserva.id)
        if (reservaEncontrada) {
            return reservaEncontrada
        } else {
            throw {
                error: 'Id no encontrado',
                status: 404
            }
        }

    }

    eliminarReserva(reservaId) {
        const index = reservas.findIndex((reserva) => reservaId === reserva.id)
        if (index === -1) {
            throw {
                error: 'id no encontrado',
                status: 404
            }
        }
        reservas.splice(index, 1)
    }

    obtenerTodas() {
        return reservas
    }

}

export default ModuloReservas