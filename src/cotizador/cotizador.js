import axios from 'axios';
import CotizacionError from './erroresCotizacion.js';

class Cotizador {
  constructor(key) {
    this.key = key;
  }

  async convertirPesosADolares(montoEnPesosAConvertir) {
    // no permitimos decimales,strings o un entero negativo ya que en tal caso la api devolvera el
    // monto de $1, tampoco el 0 ya que en tal caso la api devuelve un error
    if (!Number.isInteger(montoEnPesosAConvertir) || montoEnPesosAConvertir < 1) {
      throw new CotizacionError(400, 'El monto a convertir debe ser un entero positivo');
    }

    const url = `https://api.cambio.today/v1/quotes/ARS/USD/json?quantity=${montoEnPesosAConvertir}&key=${this.key}`;
    let montoRecibido;
    await axios.get(url)
      .then((r) => {
        montoRecibido = r.data.result.amount;
      })
      .catch((e) => {
        throw new CotizacionError(500, e.message);
      });
    return montoRecibido;
    /* let response = await axios.get(url)
         return response.data.result.amount */
  }
}

export default Cotizador;
