import axios from 'axios';
import moment from 'moment';
import ModuloFeriados from './ModuloFeriados.js';

class ModuloFeriadosFactory {
  static async create() {
    const response = await axios.get(`http://nolaborables.com.ar/api/v2/feriados/${moment().year()}`);
    const feriados = response.data;
    return new ModuloFeriados(feriados);
  }
}

export default ModuloFeriadosFactory;
