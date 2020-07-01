import Chai from 'chai';
import FeriadosFactory from '../src/apis/feriados/FeriadosFactory.js';

async function feriadosTest() {
  const feriadosApi = await FeriadosFactory.create();

  function esFeriado_conDiaFeriado_devuelveTrue() {
    const esFeriado = feriadosApi.esFeriado('2020-12-25');
    Chai.assert(esFeriado, 'El dia debe ser feriado');
  }

  function esFeriado_conDiaNoFeriado_devuelveFalse() {
    const esFeriado = feriadosApi.esFeriado('2020-12-21');
    Chai.assert(!esFeriado, 'El dia no debe ser feriado');
  }

  function esFeriado_conFechaNula_lanzaError() {
    Chai.assert.throws(() => feriadosApi.esFeriado(null));
  }

  function esFeriado_conFechaInvalida_lanzaError() {
    Chai.assert.throws(() => feriadosApi.esFeriado('2020'));
  }

  esFeriado_conDiaFeriado_devuelveTrue();
  esFeriado_conDiaNoFeriado_devuelveFalse();
  esFeriado_conFechaNula_lanzaError();
  esFeriado_conFechaInvalida_lanzaError();
  console.log('--------- Los test de feriadosTest pasaron correctamente ---------');
}

export default feriadosTest;
