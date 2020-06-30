import './env.js';
import reporteTest from './reporteTest.js';
import feriadosTest from './feriadosTest.js';
import moduloReservasTest from './moduloReservasTest.js';
import moduloCanchasTest from './moduloCanchasTest.js';

async function alltest() {
  await reporteTest();
  await feriadosTest();
  await moduloReservasTest();
  await moduloCanchasTest();
}

alltest();
