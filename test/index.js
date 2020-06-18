import moduloFeriadosTest from './moduloFeriadosTest.js'
import moduloReservasTest from './moduloReservasTest.js'
import moduloCanchasTest from './moduloCanchasTest.js'

async function alltest() {
    await moduloFeriadosTest()
    await moduloReservasTest()
    await moduloCanchasTest()
}

alltest()