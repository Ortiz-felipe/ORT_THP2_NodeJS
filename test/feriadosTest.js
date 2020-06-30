import FeriadosFactory from '../src/apis/feriados/FeriadosFactory.js';

async function feriadosTest() {
  const feriadosApi = await FeriadosFactory.create();

  function esFeriado_conDiaFeriado_devuelveTrue() {
    const esFeriado = feriadosApi.esFeriado('2020-12-25');
    console.log(`La fecha 2020-12-25 corresponde a un feriado: ${esFeriado}`);
  }

  function esFeriado_conDiaNoFeriado_devuelveFalse() {
    const esFeriado = feriadosApi.esFeriado('2020-12-21');
    console.log(`La fecha 2020-12-21 corresponde a un feriado: ${esFeriado}`);
  }

  function esFeriado_conFechaNula_lanzaError() {
    try {
      feriadosApi.esFeriado(null);
    } catch (error) {
      console.log(error);
      console.log('La fecha es nula');
    }
  }

  function esFeriado_conFechaInvalida_lanzaError() {
    try {
      feriadosApi.esFeriado('holis');
    } catch (error) {
      console.log(error);
      console.log('La fecha es invalida');
    }
  }

  esFeriado_conDiaFeriado_devuelveTrue();
  esFeriado_conDiaNoFeriado_devuelveFalse();
  esFeriado_conFechaNula_lanzaError();
  esFeriado_conFechaInvalida_lanzaError();
}

export default feriadosTest;
