import moment from 'moment'


class ModuloFeriados {

    constructor(feriados) {
        this.feriados = feriados
    }

    esFeriado(fechaParam) {
        if (!fechaParam) {
            throw new Error("La fecha es requerida")
        }

        const fecha = moment(fechaParam);

        if (!fecha.isValid()) {
            throw new Error("La fecha no es valida")
        }

        const mes = fecha.month() + 1
        const dia = fecha.date()
        const esFeriado = this.feriados.some((feriado) => feriado.mes === mes && feriado.dia === dia)

        return esFeriado
    }
}

export default ModuloFeriados
