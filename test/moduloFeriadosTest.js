import ModuloFeriadosFactory from '../src/ModuloFeriados/ModuloFeriadoFactory.js'

async function moduloFeriadosTest() {
    const moduloFeriados = await ModuloFeriadosFactory.create();

    function esFeriado_conDiaFeriado_devuelveTrue() {
        const esFeriado = moduloFeriados.esFeriado("2020-12-25")
        console.log("La fecha 2020-12-25 corresponde a un feriado: " + esFeriado)
    }

    function esFeriado_conDiaNoFeriado_devuelveFalse() {
        const esFeriado = moduloFeriados.esFeriado("2020-12-21")
        console.log("La fecha 2020-12-21 corresponde a un feriado: " + esFeriado)
    }

    function esFeriado_conFechaNula_lanzaError() {
        try {
            moduloFeriados.esFeriado(null)
        } catch (error) {
            console.log(error)
            console.log("La fecha es nula")
        }

    }

    function esFeriado_conFechaInvalida_lanzaError() {
        try {
            moduloFeriados.esFeriado("holis")
        } catch (error) {
            console.log(error)
            console.log("La fecha es invalida")
        }
    }

    esFeriado_conDiaFeriado_devuelveTrue()
    esFeriado_conDiaNoFeriado_devuelveFalse()
    esFeriado_conFechaNula_lanzaError()
    esFeriado_conFechaInvalida_lanzaError()
}

export default moduloFeriadosTest

