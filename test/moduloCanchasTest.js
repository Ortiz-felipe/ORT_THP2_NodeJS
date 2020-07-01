import Chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import ModuloCanchasFactory from '../src/ModuloCanchas/ModuloCanchasFactory.js';
import Cancha from '../src/models/Cancha.js';

Chai.use(chaiAsPromised);

async function moduloCanchasTest() {
  const moduloCanchas = ModuloCanchasFactory.create();

  async function crear_seCreaCancha() {
    const cancha = new Cancha('Pele', 55, 11);

    await Chai.assert.isFulfilled(moduloCanchas.CU_crearCancha.run(cancha));
  }

  async function crear_datosInvalidos_noSeCreaCancha() {
    const cancha = new Cancha('Pele', 55, 0);

    await Chai.assert.isRejected(moduloCanchas.CU_crearCancha.run(cancha));
  }

  async function eliminarCancha_canchaExistente() {
    const cancha = new Cancha('Pele', 55, 1);
    const canchaCreada = await moduloCanchas.crear(cancha);

    await Chai.assert.isFulfilled(moduloCanchas.CU_eliminarCancha.run(canchaCreada.id));
  }

  async function eliminarCancha_canchaNoExistente() {
    await Chai.assert.isFulfilled(moduloCanchas.CU_eliminarCancha.run(100));
  }

  await crear_seCreaCancha();
  await crear_datosInvalidos_noSeCreaCancha();
  await eliminarCancha_canchaExistente();
  await eliminarCancha_canchaNoExistente();
  console.log('--------- Los test de moduloCanchasTest pasaron correctamente ---------');
}

export default moduloCanchasTest;
