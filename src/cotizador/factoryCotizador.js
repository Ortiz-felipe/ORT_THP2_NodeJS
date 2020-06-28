import Cotizador from './cotizador.js'

class CreadorCotizador {
    key = '4398|v2JA~7vmgHm14uPXWvtXA9v9pJvsq^5C'

    getCotizador() {
        return new Cotizador(this.key)
    }
}

export default CreadorCotizador 