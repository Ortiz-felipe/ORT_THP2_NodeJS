import ModuloReservasFactory from '../src/ModuloReservas/ModuloReservasFactory.js'

async function moduloReservasTest() {
    const moduloReservas = await ModuloReservasFactory.create();

    async function crear_conDiaFeriado_noCreaReserva() {
        const reserva = {
            nombre: "nancy",
            dni: "95821465",
            fecha: "2020-12-25",
            email: "nancy@gmail.com"
        }
        try {
            const crearReserva = await moduloReservas.crear(reserva)
        } catch (error) {
            console.log(error)
        }
    }

    async function crear_conDiaNoferiado_creaReserva() {
        const reserva = {
            nombre: "nancy",
            dni: "95821465",
            fecha: "2020-12-23",
            email: "nancy@gmail.com"
        }
        try {
            const crearReserva = await moduloReservas.crear(reserva)
            console.log(reserva)
        } catch (error) {
            console.log(error)
        }
    }

    async function crear_conNombreInvalido_noCreaReserva() {
        const reserva = {
            nombre: 1456,
            dni: "95821465",
            fecha: "2020-12-24",
            email: "nancy@gmail.com"
        }
        try {
            const crearReserva = await moduloReservas.crear(reserva)
        } catch (error) {
            console.log(error)
        }
    }
    await crear_conDiaFeriado_noCreaReserva()
    await crear_conDiaNoferiado_creaReserva()
    await crear_conNombreInvalido_noCreaReserva()
}


export default moduloReservasTest