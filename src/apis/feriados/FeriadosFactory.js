import axios from 'axios';
import moment from 'moment';
import Feriados from './Feriados.js';

class FeriadosFactory {
  static async create() {
    if (!FeriadosFactory.instance) {
      const response = await axios.get(`http://nolaborables.com.ar/api/v2/feriados/${moment().year()}`);
      const feriados = response.data;
      FeriadosFactory.instance = new Feriados(feriados);
    }
    return FeriadosFactory.instance;
  }
}

export default FeriadosFactory;
