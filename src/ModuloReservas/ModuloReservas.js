import Joi from '@hapi/joi'

const reservas = []
class ModuloReservas {

    async crear(reservaParam) {
        await this.validar(reservaParam)
        reservas.push(reservaParam)

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

    }

    obtenerTodas() {
        return reservas
    }

}

export default ModuloReservas