import Joi from '@hapi/joi'

const canchas = []
let id = 1

class ModuloCanchas {

    async crear(canchaParam) {
        await this.validar(canchaParam)
        canchaParam.id = id
        canchaParam.estaHabilitada = true
        canchas.push(canchaParam)
        id++
        return canchaParam
    }

    async validar(canchaParam) {
        const schema = Joi.object({
            nombre: Joi.string()
                .required(),
            precio: Joi.number()
                .required()
                .min(50),
            capacidad: Joi.number()
                .required()
                .min(1)
                .max(20)
        })
        await schema.validateAsync(canchaParam);

    }
}
export default ModuloCanchas