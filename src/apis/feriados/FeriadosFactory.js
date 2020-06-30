import axios from 'axios';
import moment from 'moment';
import Feriados from './Feriados.js';

class FeriadosFactory {
  static async create() {
    const response = await axios.get(`http://nolaborables.com.ar/api/v2/feriados/${moment().year()}`);
    const feriados = response.data;
    return new Feriados(feriados);
  }
}

export default FeriadosFactory;
