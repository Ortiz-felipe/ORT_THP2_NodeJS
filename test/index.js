import './env.js';
import reporteTest from './reporteTest.js';
import feriadosTest from './feriadosTest.js';
import moduloReservasTest from './moduloReservasTest.js';
import CanchasTest from './CanchasTest.js';
import db from '../src/db.js';

async function alltest() {
  await reporteTest();
  await feriadosTest();
  await moduloReservasTest();
  await CanchasTest();
}

db.sync()
  .then(() => alltest())
  .catch((error) => console.log(error));
