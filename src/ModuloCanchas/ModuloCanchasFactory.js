import ModuloCanchas from './ModuloCanchas.js'

class ModuloCanchasFactory {

    static create() {
        return new ModuloCanchas()
    }
}

export default ModuloCanchasFactory