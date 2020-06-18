import ModuloCanchasFactory from '../src/ModuloCanchas/ModuloCanchasFactory.js'


async function moduloCanchasTest() {
    const moduloCanchas = ModuloCanchasFactory.create()

    async function crear_seCreaCancha() {
        const cancha = {
            nombre: "Pele",
            precio: 55,
            capacidad: 11
        }
        const canchaCreada = await moduloCanchas.crear(cancha)
        console.log(canchaCreada)
    }

    async function crear_datosInvalidos_noSeCreaCancha() {
        const cancha = {
            nombre: "Pele",
            precio: 55,
            capacidad: 0
        }

        try {
            const canchaCreada = await moduloCanchas.crear(cancha)
        } catch (error) {
            console.log('No se creo por ' + JSON.stringify(error))
        }
    }

    async function eliminarCancha_canchaExistente() {
        const cancha = {
            nombre: "Pele",
            precio: 55,
            capacidad: 1
        }
        const canchaCreada = await moduloCanchas.crear(cancha)
        moduloCanchas.eliminarCancha(canchaCreada.id)
        console.log('Cancha eliminada')
    }

    async function eliminarCancha_canchaNoExistente() {
        try {
            await moduloCanchas.eliminarCancha(100)
        } catch (error) {
            console.log(error)
        }
    }
    await crear_seCreaCancha()
    await crear_datosInvalidos_noSeCreaCancha()
    await eliminarCancha_canchaExistente()
    await eliminarCancha_canchaNoExistente()
}

export default moduloCanchasTest