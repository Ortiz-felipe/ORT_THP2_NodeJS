import './env.js';
import reporteTest from './reporteTest.js';
import feriadosTest from './feriadosTest.js';
import reservasTest from './reservasTest.js';
import CanchasTest from './CanchasTest.js';
import db from '../src/db.js';

async function alltest() {
  await reporteTest();
  await feriadosTest();
  await reservasTest();
  await CanchasTest();
}

db.sync()
  .then(() => alltest())
  .catch((error) => console.log(error));
