import moduloFeriadosTest from './moduloFeriadosTest.js'
import moduloReservasTest from './moduloReservasTest.js'

async function alltest() {
    await moduloFeriadosTest()
    await moduloReservasTest()
}

alltest()