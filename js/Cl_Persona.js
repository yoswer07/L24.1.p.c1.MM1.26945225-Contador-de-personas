export default class Cl_Persona {
    constructor(n, s) {
        this.nombre = n;
        this.sexo = s;
    }

    //metodos
    set nombre(n) {
        this._nombre = n;
    }

    get nombre() {
        return this._nombre;
    }

    set sexo(s) {
        this._sexo = s;
    }

    get sexo() {
        return this._sexo;
    }
}